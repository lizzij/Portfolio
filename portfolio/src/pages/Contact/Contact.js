import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import NavBar from '../../components/NavBar'
// import EmailIcon from '../../assets/imgs/email.png'
// import LinkedinIcon from '../../assets/imgs/linkedin.png'
// import GithubIcon from '../../assets/imgs/github.png'
import Pinky from '../../assets/imgs/pinky.gif'
import './Contact.scss';

function Contact() {

  const navStatus = { contact: 'active' };

  return (
    <>
    <div className="Contact">
      <NavBar navStatus={ navStatus } />
      <Container fluid>
        <a href="mailto:elizazijinhuang@gmail.com" rel="noopener noreferrer" target="_blank"> 
          <Row className="ContactRow noGutters border-top">
            <Col>
              <span className="Brand">eliza</span>
              <span className="Light">zijin</span>
              <span className="Brand">huang</span>
              <span className="Light">@</span>
              <span className="Dark">gmail</span>
              <span className="Light">.com</span>
              </Col>
            <Col xs lg="1">
              {/* <Image src={EmailIcon} className="Icons"/> */}
            </Col>
          </Row>
        </a>

        <a href="https://www.linkedin.com/in/lizzij/" rel="noopener noreferrer" target="_blank">
          <Row className="ContactRow noGutters border-top">
            <Col>
              <span className="Dark">linkedin</span>
              <span className="Light">.com/in/</span>
              <span className="Brand">lizzij</span>
              </Col>
            <Col xs lg="1">
              {/* <Image src={LinkedinIcon} className="Icons"/> */}
            </Col>
          </Row>
        </a>

        <a href="https://github.com/lizzij" rel="noopener noreferrer" target="_blank">
          <Row className="ContactRow noGutters border-top">
            <Col>
              <span className="Dark">github</span>
              <span className="Light">.com/</span>
              <span className="Brand">lizzij</span></Col>
            <Col xs lg="1">
              {/* <Image src={GithubIcon} className="Icons"/> */}
            </Col>
          </Row>
        </a>
        
        <Row className="ContactRow noGutters border-top border-bottom">
          <Col>
            <span className="Brand">eliza</span>
            <span className="Light">chat</span>
            <span className="Dark">bot</span></Col>
          <Col xs lg="1"></Col>
        </Row>
      </Container>

      
    </div>
    <Image src={Pinky} className="Pinky"/>
    </>
  );
}

export default Contact;