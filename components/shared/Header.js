import React, { Component } from 'react';
import Link from 'next/link';
import {Link as NextLink} from '../../routes';

import '../../styles/main.scss';


export default class Header extends Component {


  
  render() {

    return (
      <React.Fragment>
        <Link href={{pathname:"/"}}>
          {/* <a style={{'fontSize': '20px'}}>Home </a> */}
          <a>Home </a>
        </Link>

        <Link href={{pathname:"/portfolio"}}>
          <a>Portfolio </a>
        </Link>

        <Link href={{pathname:"{/cv}"}}>
          <a>CV </a>
        </Link>

        <Link href={{pathname:"/blogs"}}>
          <a>Blogs </a>
        </Link>      

        <Link href={{pathname:"/about"}}>
          <a>About </a>
        </Link>

        {/* <NextLink route='test' params={{id: '2'}}><a>Test 2</a></NextLink>
        <NextLink route='test' params={{id: '5'}}><a>Test 5</a></NextLink> */}

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
