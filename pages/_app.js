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
    const isAthenticated = process.browser ? auth0.clientAuth : auth0.serverAuth(ctx.req);
    

    // const isAthenticated = process.browser ? "clientAuth()" : "serverAuth()";

    // Same as :
    // let isAthenticated;
    // if (process.browser) {
    //   isAthenticated = "clientAuth()";
    // } else {
    //   isAthenticated = "serverAuth()";
    // }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    
    return { pageProps }
  }
  render(){
    const { Component, pageProps } = this.props;

    return(
      <>
        <Container>
          <Component {...pageProps} />
        </Container>
      </>
    )
  }
}