import React, { Component } from 'react';
import classNames from 'classnames';
import { Row, Col, Nav, NavItem } from 'react-bootstrap';
import './Products.css';

class Products extends Component {
  render() {

    return (
      <div className="container">
        <div className="product-section">
          <Row>
            <Col md={8} mdOffset={2} className='text-center'>
              <h2 className="title">Some of Our Awesome Products</h2>
              <Nav bsStyle="pills" className="nav-pills-rose" activeKey={1}>
                <NavItem eventKey={1}>
                  All
                </NavItem>
                <NavItem eventKey={2}>
                  Tablet Case
                </NavItem>
                <NavItem eventKey={3}>
                  Camera Case
                </NavItem>
                <NavItem eventKey={4}>
                  Iphone Case
                </NavItem>
              </Nav>
            </Col>
          </Row>
          <Row className='tab-space'/>
          <Row>
            <Col md={6}>
              <div className={classNames('card', 'card-raised', 'card-background')} style={{backgroundImage: "url(./dg1.jpg)"}}>
                <div className="card-content">
                  <h6 className="category text-info">Productivity</h6>
                  <a href="#pablo">
                     <h3 className="card-title">The Best Productivity Apps on Market</h3>
                  </a>
                  <p className="card-description">
                     Dont be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                  <a href="#pablo" className="btn btn-danger btn-round">
                  <i className="material-icons">content_copy</i> View App
                  </a>
               </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

    );
  }
}

export default Products;
