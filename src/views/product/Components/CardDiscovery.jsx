import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

// image/icon
import blockgrey from 'src/assets/images/blockgrey.webp'
import mesacopas from 'src/assets/images/mesacopas.webp'

import PropTypes from 'prop-types'
export const CardDiscovery = ({
    imageData
}) => {

    return (
        <div className='card-discovery'>
            <Container>
                <Row>
                    {
                        imageData.map(({ src, alt, isImage, isArticle, article }, index) => (
                            <Col
                                key={index}
                                sm={6}
                                md={4}
                                lg={3}
                                className={`${isArticle ? article?.background : ''}${!isImage && !isArticle ? 'bg-secondary d-inline':''}`}
                            >
                                {
                                    isImage
                                    && (
                                        <img
                                            src={src}
                                            alt={alt}
                                            className='img-fluid'
                                        />
                                    )
                                }

                                {
                                    isArticle
                                    && (
                                        <div>
                                            <h4>{article?.title}</h4>
                                            <p>{article?.text}</p>
                                        </div>
                                    )

                                }

                                {/* {
                                    !isImage && !isArticle
                                    && (
                                        <img
                                            src={blockgrey}
                                            alt='block'
                                            className='img-fluid'
                                        />
                                    )
                                } */}



                            </Col>
                        ))

                    }
                </Row>
            </Container>
        </div>
    )
}


CardDiscovery.protoTypes = {
    imageData: PropTypes.array
}


CardDiscovery.defaultProps = {
    imageData: [
        {
            isArticle: true,
            article: {
                background: 'bg-warning',
                title: 'Discover your true style',
                text: 'Penatibus et magnis',
                helper: ''
            }
        },
        {
            isImage: false,
            isArticle: false
        },
        {
            src: mesacopas,
            alt: 'Image',
            isImage: true,
            isArticle: false
        },
        {
            isImage: false,
            isArticle: false
        },
        {
            isImage: false,
            isArticle: false
        },
        {
            isImage: false,
            isArticle: true
        }
    ]
}