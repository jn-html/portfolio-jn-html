import React, { Component } from 'react';
import Link from 'next/link';
import {Link as NextLink} from '../../routes';

import '../../styles/main.scss';


export default class Header extends Component {


  
  render() {

    const {title} = this.props;

    return (
      <React.Fragment>
        <p>{title}</p>
        {this.props.children}

        <Link href="/">
          {/* <a style={{'fontSize': '20px'}}>Home </a> */}
          <a>Home </a>
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

        <NextLink route='test' params={{id: '2'}}> Test 2 </NextLink>
        <NextLink route='test' params={{id: '5'}}> Test 5 </NextLink>

        <style jsx>{`
          a {
            font-size: 20px;
            text-decoration: none;
          }
        `}</style>
      </React.Fragment>
    )
  }
}
