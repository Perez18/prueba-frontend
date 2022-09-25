import React from 'react'

// carousel
import OwlCarousel from "react-owl-carousel3";

// protypes
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { Col, Container, Row } from 'react-bootstrap';

const Carousel = ({
  bannerData
}) => {

  return (
    <div className='carousel'>
      <OwlCarousel
        className="owl-theme homepage-slides"
        items={1}
        margin={0}
        mouseDrag={true}
        smartSpeed={1000}
        dotData={true}
        autoplay={false}
        autoplaySpeed={1000}
        loop={true}
        nav={true}
        navClass='navIcon'
        navText={['','']}
        dotsContainer={".owl-thumbs"}
      >
        {
          bannerData.map(({ bgClass, bgColor, card }, index) => (
            <div key={index} className={bgColor}>
              <div className={bgClass}>

                {
                  Object.entries(card || {})?.length > 0
                  && (
                    <Card>
                      <Card.Body>
                        <h3>{card?.title}</h3>
                        <Card.Text>
                          {card?.text}
                        </Card.Text>
                        <p className='more'>{card?.more} <FontAwesomeIcon icon={faArrowRight} /></p>
                      </Card.Body>
                    </Card>
                  )
                }
              </div>
            </div>
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
      bgColor: 'bg-almond',
      card: {
        title: 'Retro: Old is New Again',
        text: 'dolor sit amet, consectetur adipiscing elit. In feugiat odio id rhoncus semper. Aliquam aliquet lacinia sollicitudin. Pellentesque non porttitor diam. ',
        more: 'discovery this trend '
      }

    },
    {
      bgClass: 'banner banner-two',
      bgColor: 'bg-yellow-light',
    }
  ]
}