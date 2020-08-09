import React, { Component } from 'react';
import Link from 'next/link';


export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
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
