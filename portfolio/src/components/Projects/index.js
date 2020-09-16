import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectTags from '../ProjectTags'
import ProjectCard from '../ProjectCard'
import { projects } from '../../api/projects.json'
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
          {
            Object.values(projects)
              .filter(project => project.tags.includes(this.state.selectedTag))
              .map((project, index) => <ProjectCard key={index} project={project} />)
          }
        </Container>
      </section>
    )
  }
}

export default Projects;