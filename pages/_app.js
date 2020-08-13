import React from 'react';
import App from 'next/app';
import { Container } from 'reactstrap';
import auth0 from '../services/auth0';

// STYLING
// order matter 1st in list will be overided
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

export default class MyApp extends App {

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    const user = process.browser ? auth0.clientAuth() : auth0.serverAuth(ctx.req);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    
    // Because it's destructure in BaseLayout, we can access it
    // SWITCH BETWEEN TRUE|FALSE  / OR LONG WAY:
    // let isAuthenticated = false;
    // if(user) { isAuthenticated = true }
    const auth = { user, isAuthenticated: !!user };
    
    return { pageProps, auth }
  }
  render(){
    const { Component, pageProps, auth } = this.props;

    return(
      <>
        <Container>
          <Component {...pageProps} auth={auth} />
        </Container>
      </>
    )
  }
}



// IN MyApp Component
// const isAuthenticated = process.browser ? "clientAuth()" : "serverAuth()";

    // Same as :
    // let isAuthenticated;
    // if (process.browser) {
    //   isAuthenticated = "clientAuth()";
    // } else {
    //   isAuthenticated = "serverAuth()";
    // }
