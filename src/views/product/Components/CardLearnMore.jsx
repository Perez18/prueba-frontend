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
                        <Col key={index} className='p-0'>
                            <Card>
                                <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22243%22%20height%3D%22160%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20243%20160%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1836dca6e78%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A12pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1836dca6e78%22%3E%3Crect%20width%3D%22243%22%20height%3D%22160%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2291.765625%22%20y%3D%2286.3%22%3E243x160%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
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