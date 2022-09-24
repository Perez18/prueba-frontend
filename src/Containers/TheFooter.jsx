import React from 'react'

// boostrap
import { Col, Container, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// icon/img
import IconLogoWhite from 'src/assets/brand/logo_white.png';
import Icofont from 'react-icofont';

const TheFooter = () => {
    return (
        <footer id="app-footer">
            <Container fluid>
                <Row>
                    <Col md={8} className='section-info'>
                        <ul className='menu'>
                            <li>
                                <Link href="#">trends</Link>
                            </li>
                            <li>
                                <Link href="#">Collections</Link>
                            </li>
                            <li>
                                <Link href="#">tips & guides</Link>
                            </li>
                            <li>
                                <Link href="#">find a store</Link>
                            </li>
                            <li>
                                <Link href="#">careers</Link>
                            </li>
                        </ul>
                        <Row>
                            <Col>
                                <ul className='contacto'>
                                    <li>tel: +(507) 314-7709</li>
                                    <li>fax: +(507) 314-7709</li>
                                    <li>
                                        <a href='mailto:info@tiendaconceptslife.com' className='email'>
                                            info@tiendaconceptslife.com
                                        </a>
                                    </li>
                                    <li>
                                        <Image src={IconLogoWhite} alt='Logo' width={240} height={150} />
                                    </li>
                                    <li>
                                        <p className='All-rights'>
                                            All rights reserved 2017 &copy; Tienda Concepts Life
                                        </p>
                                    </li>
                                </ul>
                            </Col>
                            <Col>
                                <ul className='direccion'>
                                    <li>Av. Republica de Brasil 303</li>
                                    <li>Panamá </li>
                                    <li>Panamá</li>
                                </ul>
                            </Col>
                        </Row>

                    </Col>
                    <Col md={4} className='section-redes'>
                        <ul className='redes'>
                            <li>Follow us</li>
                            <li>
                                <a href='https://twitter.com/conceptslife?lang=en' target='_blank'>
                                    <Icofont icon="twitter" size="1" />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.facebook.com/conceptslife/' target='_blank' >
                                    <Icofont icon="facebook" size="1" />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/concepts_life/' target='_blank'>
                                    <Icofont icon="instagram" size="1" />
                                </a>
                            </li>
                        </ul>
                        <p className='text-center'>Created by Nessim Btesh and Michael Del Muro</p>

                    </Col>
                </Row>

            </Container>
        </footer>
    )
}

export default TheFooter