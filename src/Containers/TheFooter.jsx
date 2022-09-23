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
                        <div className='info-list'>
                            <ul>
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
                        </div>
                        <Row>
                            <Col className='info-contacto'>
                                <ul>
                                    <li>tel: +(507) 314-7709</li>
                                    <li>fax: +(507) 314-7709</li>
                                    <li>
                                        <a href='mailto:info@tiendaconceptslife.com'>
                                            info@tiendaconceptslife.com
                                        </a>
                                    </li>
                                    <li>
                                        <Image src={IconLogoWhite} alt='Logo' width={240} height={150} />
                                    </li>
                                    <li>
                                        All rights reserved 2017 &copy; Tienda Concepts Life
                                    </li>
                                </ul>
                            </Col>
                            <Col className='info-direccion'>
                                <ul>
                                    <li>Av. Republica de Brasil 303</li>
                                    <li>Panamá </li>
                                    <li>Panamá</li>
                                </ul>
                            </Col>
                        </Row>

                    </Col>
                    <Col md={4} className='section-redes'>
                        <ul>
                            <li>Follow us</li>
                            <li>
                                <Icofont icon="twitter"  size="1" />
                            </li>
                            <li>
                                <Icofont icon="facebook"  size="1" />
                            </li>
                            <li>
                                <Icofont icon="instagram"  size="1" />
                            </li>
                        </ul>
                        <p>Created by Nessim Btesh and Michael Del Muro</p>

                    </Col>
                </Row>

            </Container>
        </footer>
    )
}

export default TheFooter