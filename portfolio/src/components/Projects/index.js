import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import ProjectTag from '../../components/ProjectTag'
import './styles.scss';

const Projects = () => {
    return (
    <section className="Projects">
        <Container fluid className="Content">
          <Row className="Tags">
            <ProjectTag label="selected" />
            <ProjectTag label="all" />
            <ProjectTag label="web dev" />
            <ProjectTag label="ml" />
            <ProjectTag label="hackathon" />
            <ProjectTag label="coop" />
            <ProjectTag label="research" />
            <ProjectTag label="mooc" />
            <ProjectTag label="blog" />
            <ProjectTag label="etc" />
          </Row>
        </Container>
    </section>
    );
}

export default Projects;