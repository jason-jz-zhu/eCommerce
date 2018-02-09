import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Home.css';
import Silde from '../../components/Carousel/Carousel';
import Products from '../../components/Products/Products';

class Home extends Component {
  render() {

    return (
      <div className='home-wrapper'>
        <Silde />
        <div className='line'></div>
        <div className="container">
          <div className="best-section">
            <Row>
              <Col md={8} mdOffset={2}>
                  <h2 className="title">Why our product is the best</h2>
                  <h5 className="description">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.</h5>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                 <div className="info">
                    <div className="icon icon-info">
                       <i className="fa fa-truck fa-4x" aria-hidden="true"></i>
                    </div>
                    <h4 className="info-title">Fast Shipping</h4>
                    <p>We use Federal Express, UPS and USPS as our domestic shipping carrier. There will be a surcharge on shipments to Hawaii, Alaska and Puerto Rico. After you made purchase, surcharge will be calculated by using the package weight and size.</p>
                 </div>
              </Col>
              <Col md={4}>
                 <div className="info">
                    <div className="icon icon-success">
                       <i className="fa fa-thumbs-o-up fa-4x" aria-hidden="true"></i>
                    </div>
                    <h4 className="info-title">Best Customer Service</h4>
                    <p>We will do our best to provide the customer service. If you have any question about the products, please feel free to contact us. We provide 30 days warranty for all the items, unless otherwise stated.</p>
                 </div>
              </Col>
              <Col md={4}>
                <div className="info">
                    <div className="icon icon-danger">
                       <i className="fa fa-refresh fa-4x" aria-hidden="true"></i>
                    </div>
                    <h4 className="info-title">New Release</h4>
                    <p>We would keep releasing the new fashion and creative cases for the new release product and the products which are released already. We will provide the cusmoters more choices.</p>
                 </div>
              </Col>
           </Row>
          </div>
        </div>
        <div className='line'></div>
        <Products />
        <div className='line'></div>
      </div>
    );
  }
}

export default Home;
