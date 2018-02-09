import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer-white">
         <Navbar>
           <div className="container">
             <Navbar.Header>
               <Navbar.Brand className="footer-brand">
                 <a href="#home">eCommerce</a>
               </Navbar.Brand>
             </Navbar.Header>
             <Nav className='pull-center'>
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
             </Nav>
             <Nav pullRight>
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
           </div>
         </Navbar>
      </footer>
    );
  }
}

export default Footer;
