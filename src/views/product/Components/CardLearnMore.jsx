import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
// img /icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// proptypes
import PropTypes from 'prop-types'

export const CardLearnMore = ({
    cardData
}) => {
    return (
        <div className='card-learMore'>
            <Row>
                {
                    cardData?.map(({ title, text },index) => (
                        <Col key={index} className='p-0' sm={4} md={4} lg={4} >
                            <Card>
                                <Card.Img variant="top" alt='' className='bg-block-gray' />
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Text>
                                        {text}
                                    </Card.Text>
                                    <p className='more'>read more <FontAwesomeIcon icon={faArrowRight} /> </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

CardLearnMore.propTypes = {
    cardData: PropTypes.array
}

CardLearnMore.defaultProps = {
    cardData: [
        {
            title: 'Learn more about',
            text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            more: 'read more '

        },
        {
            title: 'Learn more about',
            text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            more: 'read more '

        },
        {
            title: 'Learn more about',
            text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            more: 'read more '

        }
    ]
}