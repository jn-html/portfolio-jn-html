import React from 'react';


export default function FunctWithAuth(Component) {
  return class withAuth extends React.Component {

    alertMessage() {
      alert('Hello my friend, enjoy the ride')
    }



    render() {

      const someVariable1 = '1';
      const someVariable2 = '2';

      return (
        <Component someVariable1={someVariable1} someVariable2={someVariable2} alertMessage={this.alert} {...this.props}/>
      )
    }
  }
}