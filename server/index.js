const dotenv = require('dotenv').config();

if (process.env.NODE_ENV){
  require('dotenv').config({
    path: `${__dirname}/.env.${process.env.NODE_ENV}`,
  });
} else {
  require('dotenv').config()
}
// console.log(dotenv.parsed)

const express = require('express');
const next = require('next');
const routes = require('../routes');

// SERVICE
const authService = require('./services/auth');


const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
// const handler = app.getRequestHandler(app);
const handler = routes.getRequestHandler(app);

const secretData = [
  {
    title: 'SecretData 1',
    description: 'Plans how to build spaceship'
  },
  {
    title: 'SecretData 2',
    description: 'My secret weapon'
  }
]

app.prepare().then(() => {
  const server = express();

  // Check if user is authenticated
  server.get('/api/v1/secret', authService.checkJWT, (req, res)=> {
    return res.json(secretData);
  })

  // Check Roles
  server.get('/api/v1/onlysiteowner', authService.checkJWT, authService.checkRole('siteOwner'), (req, res)=> {
    // req.user = {};

    return res.json(secretData);
  })
  

  server.get('*',  (req, res) => {
  return handler(req, res);
  })

  server.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send({ title: 'you are Unauthorized', detail: 'Unauthorized Acces!'});
    }
  });

  server.use(handler).listen(process.env.PORT, (err) => {
    if(err) throw err
    console.log('> Ready on http://localhost:3000');
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})


// NEXT 9 dynamic routes

  // server.get('/portfolioDetail/[id]', (req, res) => {
  //   const actualPage = '/portfolioDetail'
  //   const queryParams = { id: req.params.id }
  //   app.render(req, res, actualPage, queryParams)
  // })



  // OLD NEXT dynamic routes (not needed anymore)

  // server.get('/portfolioDetail/:id', (req, res) => {
  //   const actualPage = '/portfolioDetail'
  //   const queryParams = { id: req.params.id }
  //   app.render(req, res, actualPage, queryParams)
  // })

