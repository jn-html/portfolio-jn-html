import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Secret extends Component {

  renderSecretPage() {
    const { isAuthenticated } = this.props.auth;

    if (isAuthenticated){
      return (
        <BaseLayout {...this.props.auth}>
          <BasePage>
            <h1> I'm the secret page </h1>
            <p> Secret Content here </p>
          </BasePage>
        </BaseLayout>
      )
    } else {
      return (
        <BaseLayout {...this.props.auth}>
          <BasePage>
            <h1> You are not authenticated. Please Login to acces this page. </h1>
          </BasePage>
        </BaseLayout>
      )
    }
  }

  render() {
    
    return this.renderSecretPage()
  }
}

export default Secret;



// return (
//   { isAuthenticated &&
//     <BaseLayout {...this.props.auth}>
//       <BasePage>
//         <h1> I'm the secret page</h1>

//       </BasePage>
//     </BaseLayout>
//   }
// )
