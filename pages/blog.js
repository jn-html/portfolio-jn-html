import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';


export default class blog extends React.Component {


  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>I'm Blog page</h1>

        </BasePage>
      </BaseLayout>
    )
  }
}
