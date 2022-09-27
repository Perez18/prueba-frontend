import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'

// image/icon
import mesacopas from 'src/assets/images/mesascopas.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// protypes
import PropTypes from 'prop-types'

export const CardDiscovery = ({
    imageData
}) => {

    return (
        <div className='card-discovery'>
            <Row>
                {
                    imageData.map(({ src, alt, isImage, isArticle, article }, index) => (
                        <Col key={index} sm={6} md={4} lg={3} className='content'
                        >
                            {
                                isImage
                                && (
                                    <Image
                                        src={src}
                                        alt={alt}
                                        className='image'
                                    />
                                )
                            }

                            {
                                isArticle
                                && (
                                    <div className={`article ${article?.background}`}>
                                        <h3 className='title'>{article?.title}</h3>
                                        <p className='text'>{article?.text}</p>
                                        <p className='more'>{article?.helper} <FontAwesomeIcon icon={faArrowRight} /> </p>
                                    </div>
                                )

                            }

                            {
                                (!isImage && !isArticle)
                                && (
                                    <div className='bg-block-gray'></div>
                                )
                            }
                        </Col>
                    ))

                }
            </Row>
        </div >
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
                background: 'bg-yellow-light',
                title: 'Discover your true style',
                text: 'Penatibus et magnis dis montes nascetur ridiculus mus. Magna nulla quis aliqua duis.',
                helper: 'explore our trends'
            }
        },
        {
            isImage: false,
            isArticle: false
        },
        {
            isImage: true,
            src: mesacopas,
            alt: 'Image'
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
            isArticle: false
        },
        {
            isImage: false,
            isArticle: false
        },
        {
            isImage: false,
            isArticle: false
        }
    ]
}