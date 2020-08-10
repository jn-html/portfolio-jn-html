import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';

import axios from 'axios';
// axios = require('axios').default;
// axios.<method> will now provide autocomplete and parameter typings

class Index extends SuperComponent {

  static async getInitialProps() {
    // console.log(' I\'m getting getInitialProps' )
    let userData = {};

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      userData = response.data;
      // console.log(response);
    } catch(err) {
      console.error(err)
    }
    

    // getting initial data from server
    // then returning initial data to our client
    return {initialData: [1,2,3,4], userData};
  }

  constructor(props){
    super(props);

    this.state = {
      title: 'I am Index Page'
    }
    //  binding this context to updateTitle
    // this.updateTitle = this.updateTitle.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');

  }

  componentWillUnmount() {
    console.log('componentWillUnmount');

  }

  updateTitle = () => {
    this.setState({title: 'I am the updated Index page'})
  }

  render() {
    const {title} = this.state;
    const { userData, initialData } = this.props;

    return (
      
        <BaseLayout>
          <h1 className="fromPage">I'm index page</h1>
          <h2>{title}</h2>
          <h2>{userData.title}</h2>
          <button onClick={ this.updateTitle }>Change title</button>

        </BaseLayout>

    )
  }
}

export default Index;
