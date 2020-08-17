import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../BasePage';

const namespace = 'http://localhost:3000/';


export default function Compo(role)  {
  return function FunctWithAuth(Component) {
    return class withAuth extends React.Component {
  
      static async getInitialProps(args) {
        const pageProps = await Component.getInitialProps && await Component.getInitialProps(args);
    
        return { ...pageProps };
      }
    
      renderProtectedPage() {
        const { isAuthenticated, user } = this.props.auth;
        // before
        // const userRole = user && user[`${namespace}role`];
        // after
        const userRole = user && user[namespace + `roles`];
        let isAuthorized = false;
        // debugger;

  
        if (role) {
          if (userRole && userRole === role) { isAuthorized = true };
        } else {
          isAuthorized = true;
        }
        // debugger;
  
        if (!isAuthenticated) {
          return (
            <BaseLayout {...this.props.auth}>
              <BasePage>
                <h1> You are not authenticated. Please Login to acces this page. </h1>
              </BasePage>
            </BaseLayout>
          )
        } else if (!isAuthorized) {
          return (
            <BaseLayout {...this.props.auth}>
              <BasePage>
                <h1> You are not auhtorized. You do not have permissions to acces this page. </h1>
              </BasePage>
            </BaseLayout>
          )
        } else {
          return ( <Component {...this.props} /> )
        }
      }
  
      render() {
  
        return ( this.renderProtectedPage())
      }
    }
  }
}

