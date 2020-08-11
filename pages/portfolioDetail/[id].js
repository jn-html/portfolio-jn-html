import React, { Component } from 'react';
import BaseLayout from '../../components/layouts/BaseLayout';
import { withRouter } from 'next/router';
import axios from 'axios';

class PortfolioDetail extends Component {

  static async getInitialProps({query}) {

    let post = {};
    const postId = query.id;

    try {
      // const response = axios('https://jsonplaceholder.typicode.com/posts/' + portfolioDetailId);
      const response = await axios(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      post = response.data

    } catch(err) {
      console.error(err)
    }

    return {post};
  }

  render() {

    
    const { post } = this.props;
    return (

        <BaseLayout>
          {/* <h1> I'm portfolio page</h1>
          <h2> {this.props.router.query.id}</h2> */}
          
          <h1> {post.title} </h1>
          <h2> {post.body} </h2>
          <p> {post.id} </p>
        </BaseLayout>
      
    )
  }
}

export default withRouter(PortfolioDetail);
