import React from 'react'

import { Col, Row,Image } from 'react-bootstrap'

// img/icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import shop from 'src/assets/images/shop.webp'

export const CardShop = () => {
  return (
    <div className='card-shop'>
      <Row>
        <Col
          sm={6}
          md={4}
          lg={8}
          className='content-image p-0'>
          {/* <Image src={shop} /> */}
          {/* <h1>Holas</h1> */}
          <div className='image'></div>
        </Col>
        <Col
          sm={6}
          md={4}
          lg={4}
          className='article'>
            <h2>Shop anything</h2>
            <h2>and everything</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <p className='more'>
              browse our collections <FontAwesomeIcon icon={faArrowRight} />
            </p>
        </Col>
      </Row>
    </div>
  )
}
