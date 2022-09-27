import React from 'react'

// boostrap
import { Card } from 'react-bootstrap';

// carousel
import OwlCarousel from "react-owl-carousel3";

// img/icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// protypes
import PropTypes from 'prop-types'

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
        navClass={['prev','next']}
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
      bgColor: 'bg-pink-light',
      card: {
        title: 'Retro: Old is New Again',
        text: 'Dolor sit amet, consectetur adipiscing elit. In feugiat odio id rhoncus semper. Aliquam aliquet lacinia sollicitudin. Pellentesque non porttitor diam. ',
        more: 'discovery this trend '
      }

    },
    {
      bgClass: 'banner banner-two',
      bgColor: 'bg-yellow-light',
    }
  ]
}