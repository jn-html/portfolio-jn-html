import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';


export default class blog extends Component {


  render() {
    return (
      <BaseLayout>
        <BasePage>
          <h1>I'm Blog page</h1>

        </BasePage>
      </BaseLayout>
    )
  }
}
