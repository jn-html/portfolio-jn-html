import React from 'react';
import Typed from 'react-typed';
import BaseLayout from '../components/layouts/BaseLayout';
import { Button, Container, Row, Col } from 'reactstrap';



class Index extends React.Component {

  constructor(props){
    super(props);

    this.roles = ['Developer', 'Tech Lover', 'Team Player', 'React.js', 'Next.js']
  }

  render() {

    const { isAuthenticated, user } =this.props.auth;

    return (
      <BaseLayout {...this.props.auth} className="cover">
        <div className="main-section">
          <div className="background-image">
            <img src="/static/images/background-index.png" />
          </div>

          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio. {/*and job history.*/}
                        </div>
                      </div>
                      <img className="image" src="/static/images/section-1.png"/>
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                <h1>
                  {/* { isAuthenticated && <div><h2>Hello {user.name}</h2></div>} */}
                  { isAuthenticated && <span><b>{user.name}</b></span>}
                </h1>
                  <h1>
                    Welcome to the portfolio website of Jean Marmain.
                    Get informed, collaborate and discover projects He was working on through the year!
                  </h1>
                </div>
                <Typed
                  loop
                  typeSpeed={30}
                  backSpeed={20}
                  strings={this.roles}
                  backDelay={500}
                  // fadeOut={false}
                  // fadeOutDelay={100}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                />
                <div className="hero-welcome-bio">
                  <h1>
                    Let's take a look on my work.
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>

    )
  }
}

export default Index;
