
import auth0 from 'auth0-js';
import Cookies from 'js-cookie';
// import jwt from 'jsonwebtoken';
// import axios from 'axios';

// import { getCookieFromReq } from '../helpers/utils';

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
    this.isAuthenticated = this.isAuthenticated.bind(this);
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
  //   Cookies.remove('jwt');

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

  isAuthenticated(){
    // Check whether the current is past the
    // Access Token's expiry time
    const expiresAt = Cookies.getJSON('expiresAt');
    return new Date().getTime() < expiresAt;
  }

  // async getJWKS() {
  //   const res = await axios.get('https://eincode.eu.auth0.com/.well-known/jwks.json');
  //   const jwks = res.data;
  //   return jwks;
  // }


  // async verifyToken(token) {
  //   if (token) {
  //     const decodedToken = jwt.decode(token, { complete: true});

  //     if (!decodedToken) { return undefined; }

  //     const jwks = await this.getJWKS();
  //     const jwk = jwks.keys[0];

  //     // BUILD CERTIFICATE
  //     let cert = jwk.x5c[0];
  //     cert = cert.match(/.{1,64}/g).join('\n');
  //     cert = `-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----\n`;

  //     if (jwk.kid === decodedToken.header.kid) {
  //       try {
  //         const verifiedToken = jwt.verify(token, cert);
  //         const expiresAt = verifiedToken.exp * 1000;

  //         return (verifiedToken && new Date().getTime() < expiresAt) ? verifiedToken : undefined;
  //       } catch(err) {
  //         return undefined;
  //       }
  //     }
  //   }

  //   return undefined;
  // }


  // async clientAuth() {
  //   const token = Cookies.getJSON('jwt');
  //   const verifiedToken = await this.verifyToken(token);

  //   return verifiedToken;
  // }

  clientAuth() {
    return this.isAuthenticated();
  }


//   async serverAuth(req) {
//     if (req.headers.cookie) {

//       const token = getCookieFromReq(req, 'jwt');
//       const verifiedToken = await this.verifyToken(token);

//       return verifiedToken;
//     }

//     return undefined;
//   }

  serverAuth(req) {
    if (req.headers.cookie) {
            
      const expiresAtCookie = req.headers.cookie.split(';').find( c => c.trim().startsWith('expiresAt='));
      if (!expiresAtCookie) {
        return undefined
      };
      const expiresAt = expiresAtCookie.split('=')[1];
      return new Date().getTime() < expiresAt;
    }
  }
}


const auth0Client = new Auth0();

export default auth0Client;

    // For local Storage, in constructor
    // localStorage.setItem('acces_token', authResult.accessToken)
    // localStorage.setItem('id_token', authResult.idToken)
    // localStorage.setItem('expires_at', expiresAt)
    // NAVIGATE TO HOME ROUTE
    // history.replace('/home');

    // IN serverAuth(req), to see how it works
    // const cookies = req.headers.cookie;
      // console.log(cookies);
      // const splitedCookies = cookies.split(';');
      // console.log(splitedCookies)
      // // trim to take of space in "json"
      // const expiresAtCookie = splitedCookies.find(c => c.trim().startsWith('expiresAt='));
      // console.log(expiresAtCookie); 
      // const expiresAtArray = expiresAtCookie.split('=');
      // console.log(expiresAtArray);
      // const expiresAt = expiresAtCookie[1];
      // console.log(expiresAt);