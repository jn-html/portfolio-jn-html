import React from 'react';


// // get data
// // return data
// const Index = () => {

//   return (
//     <h1>I am index page</h1>
//   )
// }

// Class component
// More function
// Uses lyfecycle function
class Index extends React.Component{


  render() {
    return (
      <React.Fragment>
        <h1>I am index page</h1>
        <a href="/">Home </a>
        <a href="/portfolio">Portfolio </a>
        <a href="/cv">CV </a>
        <a href="/blogs">Blogs </a>
        <a href="/about">About</a>
      </React.Fragment>
    )
  }
}

export default Index;
