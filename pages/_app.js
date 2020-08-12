import React from 'react';
import App from 'next/app';
import { Container } from 'reactstrap';


// STYLING
// order matter 1st in list will be overided
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

export default class MyApp extends App {

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

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