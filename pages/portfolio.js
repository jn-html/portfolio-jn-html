import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import Link from 'next/link';
import axios from 'axios';


export default class portfolio extends Component {

  static async getInitialProps() {
    // console.log(' I\'m getting getInitialProps' )
    let posts = [];

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts = response.data;
      // console.log(response);
    } catch(err) {
      console.error(err)
    }
    
    return {posts: posts.splice(0, 10)};
  }

  renderPosts(posts) {
    return posts.map((post) => {
      return (
        <li>
          <Link href={`/portfolioDetail?title=${post.title}`}>
            <a style={{'fontSize': '20px'}}> {post.title} </a>
          </Link>
        </li>
      )
    })
  }

  render() {
    const { posts } = this.props;

    return (
      <React.Fragment>
        <BaseLayout>
          <h1>I'm Portfolio page</h1>
          <ul>
            { this.renderPosts(posts) }

              {/* Instead of renderPosts function */}
              {/* { posts.map((post) => {
                return (
                  <li>{post.title}</li>
                )
              }) } */}
          </ul>

        </BaseLayout>
      </React.Fragment>
    )
  }
}
