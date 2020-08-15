import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import FunctWithAuth from '../components/hoc/withAuth';

class Secret extends React.Component {

  static getInitialProps() {
    const superSecretValue = 'Super Secret value';

    return { superSecretValue };
  }

  render() {
    
    const { superSecretValue } = this.props
    
    return( 

      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1> I'm the secret page </h1>
          <p> Secret Content here </p>
          <h2>{superSecretValue}</h2>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth(Secret);



// return (
//   { isAuthenticated &&
//     <BaseLayout {...this.props.auth}>
//       <BasePage>
//         <h1> I'm the secret page</h1>

//       </BasePage>
//     </BaseLayout>
//   }
// )
