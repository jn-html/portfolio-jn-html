import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';

import axios from 'axios';
import { getSecretData, getSecretDataServer } from '../actions';
class Secret extends React.Component {

  static async getInitialProps({req}) {
    const anotherSecretData =  await getSecretData(req) 
    // console.log(anotherSecretData);
    return { anotherSecretData };
  }

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     secretData: []
  //   }
  // }

  // same as constructor
  state = {
    secretData: []
  }

  async componentDidMount(){
    // const res = await axios.get('/api/v1/secret');
    const secretData = await getSecretData();
    this.setState({
      secretData
    });
  }

  displaySecretData(){
    const { secretData } = this.state;

    if( secretData && secretData.length > 0) {
      // WHEN .map() need a key property (ex:index)
      return secretData.map((data, index) => {
        return(
          <div key={index}>
            <p>{data.title}</p>
            <p>{data.description}</p>
          </div>
        )
      })
    }
    // else
    return null;
  }

  render() {
    
    const { superSecretValue } = this.props
    
    return( 

      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1> I'm the secret page </h1>
          <p> Secret Content here </p>
          <h2>{superSecretValue}</h2>
          {this.displaySecretData()}
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
