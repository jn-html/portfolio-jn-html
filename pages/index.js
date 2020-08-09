import React from 'react';
import Link from 'next/link';


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
        <Link href="/">
          <a >Home </a>
        </Link>

        <Link href="/portfolio">
          <a>Portfolio </a>
        </Link>

        <Link href="/cv">
          <a>CV </a>
        </Link>

        <Link href="/blogs">
          <a>Blogs </a>
        </Link>      

        <Link href="/about">
          <a>About</a>
        </Link>
        
      </React.Fragment>
    )
  }
}

export default Index;
