import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout'

class Index extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: 'I am Index Page'
    }
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
    return (
      
        <BaseLayout>
          <h1 className="fromPage">I am index page</h1>
          <h2>{this.state.title}</h2>
          <button onClick={ () => this.updateTitle() }>Change title</button>

        </BaseLayout>

    )
  }
}

export default Index;
