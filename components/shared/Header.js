// import React, { Component } from 'react';
// import Link from 'next/link';
// import {Link as NextLink} from '../../routes';

// import '../../styles/main.scss';


// export default class Header extends Component {


  
//   render() {

//     return (
//       <React.Fragment>
        // <Link href={{pathname:"/"}}>
        //   {/* <a style={{'fontSize': '20px'}}>Home </a> */}
        //   <a>Home </a>
        // </Link>

//         <Link href={{pathname:"/portfolio"}}>
//           <a>Portfolio </a>
//         </Link>

//         <Link href={{pathname:"{/cv}"}}>
//           <a>CV </a>
//         </Link>

//         <Link href={{pathname:"/blogs"}}>
//           <a>Blogs </a>
//         </Link>      

//         <Link href={{pathname:"/about"}}>
//           <a>About </a>
//         </Link>

//         {/* <NextLink route='test' params={{id: '2'}}><a>Test 2</a></NextLink>
//         <NextLink route='test' params={{id: '5'}}><a>Test 5</a></NextLink> */}

//         <style jsx>{`
//           a {
//             font-size: 20px;
//             text-decoration: none;
//           }
//         `}</style>
//       </React.Fragment>
//     )
//   }
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


const BsNavLink = (props) => {
  const { route, title} = props
  return (
    <Link href={route}>
      <a className="nav-link">{title}</a>
    </Link>
  )
}

// WITH HOOKS
// const Example = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

// CLASS COMPONENT
export default class Exemple extends Component {
  constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // RENDER appartient au class component pas au hooks
  render(){
    // destructured for class component
    const {toggle, isOpen} = this.props

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Jean Marmain</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <BsNavLink route="/" title="Home" />
              </NavItem>
              <NavItem>
                <BsNavLink route="/portfolio" title="Portfolio" />
              </NavItem>
              <NavItem>
                <BsNavLink route="/cv" title="CV" />
              </NavItem>
              <NavItem>
                <BsNavLink route="/blog" title="Blog" />
              </NavItem>
              <NavItem>
                <BsNavLink route="/about" title="About" />
              </NavItem>

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
