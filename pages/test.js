import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from 'next/router';
import axios from 'axios';

class Test extends React.Component {

  static async getInitialProps({query}) {
    const testId = query.id
        
    return {testId};
  }


  render() {
    const {testId} = this.props;

    return (

        <BaseLayout>
          <h1> Test Page id of {testId}</h1>

        </BaseLayout>
      
    )
  }
}

export default withRouter(Test);


// For later for Mongo Atlas
// mongodb+srv://jn-html-test:testtest@cluster0.uwev0.mongodb.net/<dbname>?retryWrites=true&w=majority