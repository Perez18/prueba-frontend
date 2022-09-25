import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

// image/icon
import mesacopas from 'src/assets/images/mesacopas2.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// protypes
import PropTypes from 'prop-types'

export const CardDiscovery = ({
    imageData
}) => {

    return (
        <div className='card-discovery bg-secondary'>
            <Row>
                {
                    imageData.map(({ src, alt, isImage, isArticle, article }, index) => (
                        <Col
                            key={index}
                            sm={6}
                            md={4}
                            lg={3}
                            className={`${isArticle ? article?.background : ''} pt-1 pr-1`}
                        >
                            {
                                isImage
                                && (
                                    <Image
                                        src={src}
                                        alt={alt}
                                        fluid
                                    />
                                )
                            }

                            {
                                isArticle
                                && (
                                    <div className='article'>
                                        <h3 className='title'>{article?.title}</h3>
                                        <p className='text'>{article?.text}</p>
                                        <p className='more'>{article?.helper} <FontAwesomeIcon icon={faArrowRight} /> </p>
                                    </div>
                                )

                            }

                            {
                                (!isImage && !isArticle)
                                && (
                                    <Image
                                        src='data:image/svg+xml;charset=UTF-8,<svg%20width%3D"285"%20height%3D"220"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20viewBox%3D"0%200%20243%20160"%20preserveAspectRatio%3D"none"><defs><style%20type%3D"text%2Fcss">%23holder_1836dca6e78%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A12pt%20%7D%20<%2Fstyle><%2Fdefs><g%20id%3D"holder_1836dca6e78"><rect%20width%3D"243"%20height%3D"160"%20fill%3D"%23373940"><%2Frect><g><text%20x%3D"91.765625"%20y%3D"86.3">243x160<%2Ftext><%2Fg><%2Fg><%2Fsvg>'
                                        alt={alt}
                                        fluid
                                    />
                                )
                            }
                        </Col>
                    ))

                }
            </Row>
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
                background: 'bg-yellow-light',
                title: 'Discover your true style',
                text: 'Penatibus et magnis dis montes nascetur ridiculus mus.',
                helper: 'explore our trends'
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