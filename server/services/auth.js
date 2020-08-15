const { default: next } = require("next");
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

// MIDDLEWARE
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 15,
    // cacheMaxEntries: 5,
    // cacheMaxAge: ms('10m'),
    jwksUri: 'https://jnmn.eu.auth0.com/.well-known/jwks.json'
  }),
  // audience = ClientID
  audience: 'gJejjJctuYOVir0bF3dcmD7ptBA297L0',
  // issuer = Domaine
  issuer: 'https://jnmn.eu.auth0.com/',
  // algorithms: ['HS256'] or ['RS256']
  algorithms: ['RS256']
})









// HARDCODED TO CHECK OUR TOKEN
// const isValidToken = true; 

//   if(isValidToken){
//     next();
//   } else {
//     return res.status(401).send({title: 'Not Authorized', detail: 'Please login to get the data you are looking for'})
//   }
// }


// // MIDDLEWARE
// exports.checkJWT = function(req, res, next){
//   const isValidToken = true; 
//   if(isValidToken){
//     next();
//   } else {
//     return res.status(401).send({title: 'Not Authorized', detail: 'Please login to get the data you are looking for'})
//   }
// }
