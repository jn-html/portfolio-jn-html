import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { withRouter } from 'next/router';
import axios from 'axios';

class PortfolioDetail extends React.Component {

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
      <BaseLayout {...this.props.auth}>
        <BasePage>
          {/* <h1> I'm portfolio page</h1>
          <h2> {this.props.router.query.id}</h2> */}
          
          <h1> {PortfolioDetail.title} </h1>
          <h2> BODY: {PortfolioDetail.body} </h2>
          <p> ID: {PortfolioDetail.id} </p>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withRouter(PortfolioDetail);
