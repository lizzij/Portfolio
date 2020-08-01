import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './styles.scss';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="NavBar fixed-top">
            <Navbar.Brand className="LeftNavlink" href="/">lizzij</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="d-flex flex-row-reverse">
                <Nav.Link className="RightNavlink sm-auto" href="/about">About</Nav.Link>
                <Nav.Link className="RightNavlink sm-auto" href="/contact">Contact</Nav.Link>
                <Nav.Link className="RightNavlink sm-auto active" href="/">Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;