import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from 'next/router';
import axios from 'axios';

class PortfolioDetail extends Component {


  render(props) {
    return (

        <BaseLayout>
          <h1> I'm Portfolio Detail page</h1>
          <h2>{this.props.router.query.id}</h2>
        </BaseLayout>
      
    )
  }
}

export default withRouter(PortfolioDetail);
