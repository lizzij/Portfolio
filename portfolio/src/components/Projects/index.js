import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import './styles.scss';

const Projects = () => {
    return (
    <section className="Projects">
        <Container fluid className="Content">
          <Row className="Tags">
            <Button variant="outline-dark" className="Pill">
              <div className="Label">selected</div>
            </Button>
            <Button variant="outline-dark" className="Pill">
              <div className="Label">all</div>
            </Button>
            <Button variant="outline-dark" className="Pill">
              <div className="Label">web dev</div>
            </Button>
            <Button variant="outline-dark" className="Pill">
              <div className="Label">ml</div>
            </Button>
            <Button variant="outline-dark" className="Pill">
              <div className="Label">hackathon</div>
            </Button>
            <Button variant="outline-dark" className="Pill">
              <div className="Label">coop</div>
            </Button>
            <Button variant="outline-dark" className="Pill">
              <div className="Label">research</div>
            </Button>
            <Button variant="outline-dark" className="Pill">
              <div className="Label">mooc</div>
            </Button>
            <Button variant="outline-dark" className="Pill">
              <div className="Label">blog</div>
            </Button>
            <Button variant="outline-dark" className="Pill">
              <div className="Label">etc</div>
            </Button>
          </Row>
        </Container>
    </section>
    );
}

export default Projects;