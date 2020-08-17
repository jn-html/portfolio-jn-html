import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Link } from '../routes';
import axios from 'axios';
import { Col, Row, Card, CardHeader, CardBody, CardText, CardTitle } from 'reactstrap';



export default class portfolio extends React.Component {

  static async getInitialProps() {
    let posts = [];

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts = response.data;
    } catch(err) {
      console.error(err)
    }
    
    return {posts: posts.splice(0, 10)};
  }

  renderPosts(posts) {
    return posts.map((post, index) => {
      return (

        <Col md="4">
          <React.Fragment key={index}>
            <span>
              <Card className="portfolio-card">
                <CardHeader className="portfolio-card-header">Some Position {index}</CardHeader>
                <CardBody>
                  <p className="portfolio-card-city"> Some Location {index} </p>
                  <CardTitle className="portfolio-card-title">Some Company {index}</CardTitle>
                  <CardText className="portfolio-card-text">Some Description {index}</CardText>
                  <div className="readMore"> </div>
                </CardBody>
              </Card>
            </span>
          </React.Fragment>
        </Col>

        
      )
    })
  }


  render() {
    const { posts } = this.props;

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="portfolio-page" title="Portfolio" >
          <Row>
            { this.renderPosts(posts) }
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}


{/* <li key={index}>
          <Link as={`/portfolioDetail/${post.id}`} href={{pathname:"/portfolioDetail/[id]"}} >
            <a style={{'fontSize': '20px'}}> {post.title} </a>
          </Link>
        </li> */}



// ----------REMINDER CODE BELOW -------






  // --------Instead of renderPosts function -----------

  //             { posts.map((post) => {
  //               return (
  //                 <li>{post.title}</li>
  //               )
  //             }) } 


  //  ----------NEXT 9 dynamic routes-----------

  // <Link as={`/portfolioDetail/${post.id}`} href={{pathname:"/portfolioDetail/[id]"}} >
  //  {/* <Link as={`/portfolioDetail/${post.id}`} href={`/portfolioDetail?id=${post.id}`} > */}
  //   <a style={{'fontSize': '20px'}}> {post.title} </a>
  // </Link>


  //-----------OLD NEXT 9 dynamic routes-----------

  {/* <Link route={`/portfolioDetail/${post.id}`} >
    <a style={{'fontSize': '20px'}}> {post.title} </a>
   </Link> */}


  //  -----In return instead row------(before)
  // <BasePage className="portfolio-page" title="Portfolio" >
  //   <ul>
  //     { this.renderPosts(posts) }
  //   </ul>
  // </BasePage>
