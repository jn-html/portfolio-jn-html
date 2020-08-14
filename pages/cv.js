import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

export default class Cv extends React.Component {


  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1> I'm Cv page</h1>

        </BasePage>
      </BaseLayout>
    )
  }
}
