import React, { Component } from 'react';
import classNames from 'classnames';
import { Row, Col, Button } from 'react-bootstrap';
import './Subscribe.css';

class Subscribe extends Component {
  render() {

    return (
      
      <div
        className={classNames('subscribe-line', 'subscribe-line-image')}
        style={{ backgroundImage: "url(./bg7.jpg)" }}
      >
        <div className="container">
          <Row>
            <Col md={6} mdOffset={3}>
              <div className="text-center">
                <h3 className="title">Subscribe to our Newsletter</h3>
                <p className="description">
                  Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.
                </p>
              </div>
              <div className="card card-raised card-form-horizontal">
                <div className="card-content">
                  <form method="" action="">
                    <Row>
                      <Col sm={8}>
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                          </span>
                          <input type="email" value="" placeholder="Your Email..." className="form-control" />
                        </div>
                      </Col>
                      <Col sm={4}>
                        <Button bsStyle="primary" bsSize="large" block>Subscribe</Button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Subscribe;
