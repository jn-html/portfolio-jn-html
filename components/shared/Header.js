// WITH HOOKS
// const Example = (props) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);
// }

import React, { useState, Component } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import auth0 from '../../services/auth0';




const BsNavLink = (props) => {
  const { route, title} = props
  return (
    <Link href={route}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  )
}

const Login = () => {
  return (
    <span onClick={auth0.login} className="nav-link port-navbar-link">Login</span>
  )
}

const Logout = () => {
  return (
    <span onClick={auth0.logout} className="nav-link port-navbar-link">Logout</span>
  )
}

// CLASS COMPONENT
export default class Header extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      isOpen: false,
      dropdownOpen: false
    };
    
    this.toggle = this.toggle.bind(this);
    // this.toggleDropdown = this.toggleDropdown.bind(this);

  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // toggleDropdown() {
  //   this.setState({
  //     dropdownOpen: !this.state.dropdownOpen
  //   });
  // }

  // RENDER appartient au class component pas au hooks
  render(){
    // destructured for class component
    const { isOpen } = this.state;
    const { isAuthenticated } = this.props

    // const menuOpenClass = isOpen ? 'menu-open' : 'menu-close';

    return (
      <div>
        <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">Jean Marmain</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/" title="Home" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/portfolio" title="Portfolio" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/cv" title="CV" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/blog" title="Blog" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/about" title="About" />
              </NavItem>

                {/* { auth0.isAuthenticated() === false &&  //same as */}
                { !isAuthenticated &&
                  <NavItem className="port-navbar-item clickable">
                    <Login />
                  </NavItem>

                }
                { isAuthenticated && 
                  <NavItem className="port-navbar-item clickable">
                    <Logout />
                  </NavItem>
                }



              {/* <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem> */}
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
            {/* <NavbarText>:D XD</NavbarText> */}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

// export default Example;
