import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './styles.scss';

export default class NavBar extends Component {
    render() {
        return (
            <Navbar expand="lg" className="NavBar fixed-top d-flex flex-row justify-content-between">
                <Navbar.Brand className="LeftNavlink" href="/">lizzij</Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                {/* <Navbar.Collapse id="basic-navbar-nav" className="d-flex flex-row justify-content-end">
                    <Nav className="d-flex flex-row">
                        <Nav.Link className={`RightNavlink sm-auto ${this.props.navStatus.projects}`} href="/">Projects</Nav.Link>
                        <Nav.Link className={`RightNavlink sm-auto ${this.props.navStatus.contact}`} href="/contact">Contact</Nav.Link>
                        <Nav.Link className={`RightNavlink sm-auto ${this.props.navStatus.about}`} href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse> */}
                <Nav className="d-flex flex-row">
                    <Nav.Link className={`RightNavlink sm-auto ${this.props.navStatus.projects}`} href="/">Projects</Nav.Link>
                    <Nav.Link className={`RightNavlink sm-auto ${this.props.navStatus.contact}`} href="/contact">Contact</Nav.Link>
                    <Nav.Link className={`RightNavlink sm-auto ${this.props.navStatus.about}`} href="/about">About</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}