import React, { Component } from 'react';
// import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './Header.css';

class Header extends Component {


  render() {
    return (
      <header>
        <Navbar fixedTop className='navbar-wrapper'>
          <div className='container'>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home">eCommerce</a>
              </Navbar.Brand>
              <Navbar.Toggle className="icon-bar" />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight className='navbar-center-wrapper'>
                <NavItem href="#">
                  HOME
                </NavItem>
                <NavItem href="#">
                  ABOUT US
                </NavItem>
                <NavItem href="#">
                  PRODUCTS
                </NavItem>
                <NavItem href="#">
                  CONTACT US
                </NavItem>
                <NavItem href="#">
                  <i className="fa fa-facebook-square fa-lg" aria-hidden="true" />
                </NavItem>
                <NavItem href="#">
                  <i className="fa fa-google-plus-square fa-lg" aria-hidden="true" />
                </NavItem>
                <NavItem href="#">
                  <i className="fa fa-twitter-square fa-lg" aria-hidden="true" />
                </NavItem>
                <NavItem href="#">
                  <i className="fa fa-linkedin-square fa-lg" aria-hidden="true" />
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
    );
  }
}

export default Header;
