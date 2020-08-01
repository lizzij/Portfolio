import React from 'react';
import './styles.scss';
import { Navbar, Nav } from 'react-bootstrap';

const Navbar = () => {
    return (
        <Navbar expand="lg" className="fixed-top Navbar">
            <Navbar.Brand href="/">lizzij</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="d-flex flex-row-reverse">
                <Nav.Link className="sm-auto" href="/about">About</Nav.Link>
                <Nav.Link className="sm-auto" href="/contact">Contact</Nav.Link>
                <Nav.Link className="sm-auto active" href="/">Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navbar;