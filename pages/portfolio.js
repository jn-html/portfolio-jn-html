import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Link } from '../routes';
import axios from 'axios';



export default class portfolio extends React.Component {

  static async getInitialProps() {
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
    return posts.map((post, index) => {
      return (
        <li key={index}>

          {/* NEXT 9 dynamic routes */}
          <Link as={`/portfolioDetail/${post.id}`} href={{pathname:"/portfolioDetail/[id]"}} >
          {/* <Link as={`/portfolioDetail/${post.id}`} href={`/portfolioDetail?id=${post.id}`} > */}
            <a style={{'fontSize': '20px'}}> {post.title} </a>
          </Link>


          {/* OLD NEXT 9 dynamic routes */}
          {/* <Link route={`/portfolioDetail/${post.id}`} >
            <a style={{'fontSize': '20px'}}> {post.title} </a>
          </Link> */}
        </li>
      )
    })
  }

  // Instead of renderPosts function 
  //             { posts.map((post) => {
  //               return (
  //                 <li>{post.title}</li>
  //               )
  //             }) } 
  render() {
    const { posts } = this.props;

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>I'm Portfolio page</h1>
          <ul>
            { this.renderPosts(posts) }
          </ul>
        </BasePage>
      </BaseLayout>
    )
  }
}
