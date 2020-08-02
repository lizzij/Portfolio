import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import NavBar from '../../components/NavBar'
import EmailIcon from '../../assets/imgs/email.png'
import LinkedinIcon from '../../assets/imgs/linkedin.png'
import GithubIcon from '../../assets/imgs/github.png'
import Pinky from '../../assets/imgs/pinky.gif'
import './Contact.scss';

function Contact() {

  const navStatus = { contact: 'active' };

  return (
    <div className="Contact">
      <NavBar navStatus={ navStatus } />
      <Container fluid>
        <Row className="noGutters border-top">
          <Col>elizazijinhuang@gmail.com</Col>
          <Col xs lg="1">
            <Image src={EmailIcon} className="Icons"/>
          </Col>
        </Row>
        <Row className="noGutters border-top">
          <Col>linkedin.com/in/lizzij</Col>
          <Col xs lg="1">
            <Image src={LinkedinIcon} className="Icons"/>
          </Col>
        </Row>
        <Row className="noGutters border-top">
          <Col>github.com/lizzij</Col>
          <Col xs lg="1">
            <Image src={GithubIcon} className="Icons"/>
          </Col>
        </Row>
        <Row className="noGutters border-top border-bottom">
          <Col>Elizachatbot</Col>
          <Col xs lg="1"></Col>
        </Row>
      </Container>
      <Image src={Pinky} className="Pinky"/>
    </div>
  );
}

export default Contact;