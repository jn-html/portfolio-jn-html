import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from 'next/router';
import axios from 'axios';

class PortfolioDetail extends Component {

  static async getInitialProps({query}) {

    const portfolioDetailId = query.id;
    let PortfolioDetail = {};

    try {
      // const response = axios('https://jsonplaceholder.typicode.com/posts/' + portfolioDetailId);
      const response = await axios(`https://jsonplaceholder.typicode.com/posts/${portfolioDetailId}`);
      PortfolioDetail = response.data

    } catch(err) {
      console.error(err)
    }

    return {PortfolioDetail};
  }

  render() {

    const { PortfolioDetail } = this.props;

    return (

        <BaseLayout>
          <h1> {PortfolioDetail.title} </h1>
          <h2> BODY: {PortfolioDetail.body} </h2>
          <p> ID: {PortfolioDetail.id} </p>
        </BaseLayout>
      
    )
  }
}

export default withRouter(PortfolioDetail);
