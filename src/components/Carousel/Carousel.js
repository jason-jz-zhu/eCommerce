import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import classNames from 'classnames'
import './Carousel.css';

class Slide extends Component {
  render() {

    return (
      <Carousel>
        <Carousel.Item className={classNames('page-header', 'header-filter')}>
          <img src="./dg1.jpg" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={classNames('page-header', 'header-filter')}>
          <img src="./dg2.jpg" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={classNames('page-header', 'header-filter')}>
          <img src="./dg3.jpg" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Slide;
