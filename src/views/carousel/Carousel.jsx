import React from 'react'

// carousel
import OwlCarousel from "react-owl-carousel3";

// protypes
import PropTypes from 'prop-types'
import { Col, Container, Row } from 'react-bootstrap';

const Carousel = ({
  bannerData
}) => {

  return (
    <div className='carousel'>
      <OwlCarousel
        className="owl-theme homepage-slides"
        items={1}
        touchDrag={false}
        margin={0}
        mouseDrag={false}
        smartSpeed={1000}
        dotData={true}
        autoplay={true}
        autoplaySpeed={1000}
        loop={true}
        dotsContainer={".owl-thumbs"}
      >
        {
          bannerData.map(({ bgClass, title }, index) => (
            <Container fluid key={index}>
              <Row>
                <Col
                  // sm={10}
                  // md={10}
                  // lg={11}
                  className={`${bgClass}`}>
                </Col>
                <Col
                  // sm={2}
                  // md={2}
                  // lg={1}
                  className='bg-almond'>
                </Col>
              </Row>
            </Container>
          ))
        }
      </OwlCarousel>
    </div>
  )
}

export default Carousel;


Carousel.propTypes = {
  bannerData: PropTypes.array
}

Carousel.defaultProps = {

  bannerData: [
    {
      bgClass: 'banner banner-one',
      title: '1'
    }
  ]
}