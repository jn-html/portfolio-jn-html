
import auth0 from 'auth0-js';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import {getCookieFromReq} from '../helpers/utils'


// const CLIENT_ID = process.env.CLIENT_ID;

class Auth0 {

  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: 'jnmn.eu.auth0.com',
      clientID: 'gJejjJctuYOVir0bF3dcmD7ptBA297L0',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });

    // CALLBACK FUNCTION
    this.login = this.login.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.logout = this.logout.bind(this);
    // this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        } else if (err) {
          reject(err);
          console.log(err);
        }
      });
    })
  }

   setSession(authResult) {
    //  SET THE TIME THAT ACCES TOKEN WILL EXPIRE AT
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    


    // Cookies.set('jwt', authResult.idToken);
    Cookies.set('user', authResult.idTokenPayload);
    Cookies.set('jwt', authResult.idToken);
    Cookies.set('expiresAt', expiresAt);
  }

  logout() {
    Cookies.remove('user');
    Cookies.remove('jwt');
    Cookies.remove('expiresAt');

    this.auth0.logout({
      // returnTo: process.env.BASE_URL,
      returnTo: '',
      clientID: 'gJejjJctuYOVir0bF3dcmD7ptBA297L0'
  //     clientID: CLIENT_ID
    })
  }

  login() {
    this.auth0.authorize();
  }



  async getJWKS() {
    const res = await axios.get('https://jnmn.eu.auth0.com/.well-known/jwks.json');
    const jwks = res.data;
    return jwks;
  }

  // MIF = MOST IMPORTANT FUNCTION
    async verifyToken(token) {
      if (token) {
        // needs to be complete in order to get headers of token
        const decodedToken = jwt.decode(token, { complete: true});
        // if no corect decodedToken return ...
        if (!decodedToken){ return undefined }
        
        const jwks = await this.getJWKS();
        const jwk = jwks.keys[0];

         // BUILD CERTIFICATE
        let cert = jwk.x5c[0];
        cert = cert.match(/.{1,64}/g).join('\n');
        cert = `-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----\n`;
        //  

        if (jwk.kid === decodedToken.header.kid) {
          try {
            const verifiedToken = jwt.verify(token, cert);
            const expiresAt = verifiedToken.exp * 1000;
  
            return (verifiedToken && new Date().getTime() < expiresAt) ? verifiedToken : undefined;
            
          } catch(err) {
            return undefined;
          }
        }
      }
        return undefined;
    }


  async clientAuth() {
    const token = Cookies.getJSON('jwt');
    const verifiedToken = await this.verifyToken(token);

    return verifiedToken;
  }


  async serverAuth(req) {
    if (req.headers.cookie) {
            
      
      const token = getCookieFromReq(req, 'jwt');
      const verifiedToken = await this.verifyToken(token);
      return verifiedToken;
    }
    return undefined;
  }
}


const auth0Client = new Auth0();

export default auth0Client;




// -----------Edit rules on auth0------------------
// function (user, context, callback) {
//   const namespace = 'http://localhost:3000';
  
//   if (user.email === '@gmail.com') {
  // context.idToken[namespace + `/roles`] = '...'; // define a role name(s) (in a array if few)
//   } else {
//     context.idToken[namespace + `/roles`] = ['guest'];
//   }
//   callback(null, user, context);
// }



  // isAuthenticated(){
  //   // Check whether the current is past the
  //   // Access Token's expiry time
  //   const expiresAt = Cookies.getJSON('expiresAt');
  //   return new Date().getTime() < expiresAt;
  // }
