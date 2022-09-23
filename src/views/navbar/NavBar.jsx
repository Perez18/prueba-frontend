import React from 'react'

// boostrap
import { Image, Container, Nav, Navbar } from 'react-bootstrap';

// images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import IconLogo from 'src/assets/brand/logo.png';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#concepts">
                    <Image src={IconLogo} alt='Logo' width={300} height={80} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">trends</Nav.Link>
                        <Nav.Link href="#pricing">collections</Nav.Link>
                        <Nav.Link href="#pricing">tips & guides</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Find a store</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Contact us
                        </Nav.Link>
                        <Nav.Link>
                            <FontAwesomeIcon icon={faSearch} transform={{ rotate: 90 }} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;

