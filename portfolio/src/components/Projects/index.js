import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectTags from '../ProjectTags'
import './styles.scss';

const Projects = () => {
  return (
    <section className="Projects">
      <Container fluid>
        <ProjectTags />  
      </Container>
    </section>
  );
}

export default Projects;