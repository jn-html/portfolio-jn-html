const { default: next } = require("next");


// MIDDLEWARE
exports.checkJWT = function(req, res, next){









// HARDCODED TO CHECK OUR TOKEN
const isValidToken = false;

  if(isValidToken){
    next();
  } else {
    return res.status(401).send({title: 'Not Authorized', detail: 'Please login to get the data you are looking for'})
  }
}
