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
          <div>{this.state.selectedTag}</div>
          {
            Object.values(projects).map(project => {
              if (project.tags.includes(this.state.selectedTag)) {
                return <ProjectCard project={JSON.stringify(project)} />
              }
            })
          }
        </Container>
      </section>
    )
  }
}

export default Projects;