import React from '../../../node_modules/react';
import './Home.scss';
import { Navbar, Nav, Container, Row, Button } from 'react-bootstrap';


function Home() {
  return (
    <div className="Home">
      <Navbar expand="lg" className="fixed-top Navbar">
        <Navbar.Brand href="/">lizzij</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="d-flex flex-row-reverse">
            <Nav.Link className="ml-auto" id="inactive" href="/about">About</Nav.Link>
            <Nav.Link className="ml-auto" id="inactive" href="/contact">Contact</Nav.Link>
            <Nav.Link className="ml-auto" id="active" href="/">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <svg className="Header"
        xmlns="http://www.w3.org/2000/svg" width="100%" height="10%" 
        viewBox='0.6 0 198.3 13'>
        <text id="name-eliza" classtextlength='57' lengthAdjust="spacing" x='0' y="12" >
            ELIZA
        </text>
        <text id="name-slash" classtextlength='10' lengthAdjust="spacing" x='59' y="12" >
            /
        </text>
        <text id="name-zijin" classtextlength='48' lengthAdjust="spacing" x='73' y="12" >
            ZIJIN
        </text>
        <text classtextlength='75' lengthAdjust="spacing" x='129.6' y="12" >
            HUANG
        </text>
      </svg>

      <figure className="Video">
        {/* <img className="VideoPlaceholder"
          data-load-src="https://lekhoa.com/wp-content/themes/lekhoa/dist/images/temp/hero.png" 
          alt="" 
          src="https://lekhoa.com/wp-content/themes/lekhoa/dist/images/temp/hero.png"></img> */}
        <div className="VideoPlayer">
          <iframe id="video-iframe"
            data-module-vimeo-player="video-promo"
            src="https://player.vimeo.com/video/442765402?controls=0&amp;autoplay=1&amp;
            amptitle=0&amp;byline=0&amp;portrait=0&amp;sidedock=0;&amp;
            transparent=false&amp;autopause=false&amp;loop=1&amp;muted=1" 
            width="100%" height="100%" data-vimeo-player-autoplay="true" 
            frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen="" 
            allow="autoplay; encrypted-media" data-ready="true" title="Nebula"></iframe>
        </div>
      </figure>
    
      <section className="Projects">
        <Container fluid d-flex flex-column className="Content">
          <Row className="Tags">
            <Button variant="outline-dark" className="Pill">
              <div className="Label">all</div>
            </Button>
            <Button variant="outline-dark" className="Pill">
              <div className="Label">code</div>
            </Button>
            <Button variant="outline-dark" className="Pill">
              <div className="Label">research</div>
            </Button>
            <Button variant="outline-dark" className="Pill">
              <div className="Label">hackathon</div>
            </Button>
            <Button variant="outline-dark" className="Pill">
              <div className="Label">web dev</div>
            </Button>
            <Button variant="outline-dark" className="Pill">
              <div className="Label">blog</div>
            </Button>
            <Button variant="outline-dark" className="Pill">
              <div className="Label">machine learning</div>
            </Button>
            <Button variant="outline-dark" className="Pill">
              <div className="Label">mooc</div>
            </Button>
            <Button variant="outline-dark" className="Pill">
              <div className="Label">random</div>
            </Button>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
