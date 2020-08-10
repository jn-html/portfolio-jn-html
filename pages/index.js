import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';

class Index extends SuperComponent {
  constructor(props){
    super(props);

    this.state = {
      title: 'I am Index Page'
    }
    console.log('constructor')
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

  updateTitle() {
    this.setState({title: 'I am the updated Index page'})
  }

  render() {
    const {title} = this.state;

    return (
      
        <BaseLayout>
          <h1 className="fromPage">I'm index page</h1>
          <h2>{title}</h2>
          <button onClick={ () => this.updateTitle() }>Change title</button>

        </BaseLayout>

    )
  }
}

export default Index;
