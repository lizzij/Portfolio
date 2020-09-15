import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectTags from '../ProjectTags'
import ProjectCard from '../ProjectCard'
import './styles.scss';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTag: "selected"
    }
  }

  setSelectedTag = (tag) => {
      this.setState({
        selectedTag: tag
      })
  }

  render() {
    return (
      <section className="Projects">
        <Container fluid>
          <ProjectTags selectTag={this.setSelectedTag}/>  
          <div>{this.state.selectedTag}</div>
          <ProjectCard />
        </Container>
      </section>
    )
  }
}

export default Projects;