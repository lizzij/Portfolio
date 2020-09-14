import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectTags from '../ProjectTags'
import './styles.scss';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTag: "selected"
    }
  }

  doSomethignWithTag = (tag) => {
      this.setState({
        selectedTag: tag
      })
  }

  render() {
    return (
      <section className="Projects">
        <Container fluid>
          <ProjectTags selectTag={this.doSomethignWithTag}/>  
          <div>{this.state.selectedTag}</div>
        </Container>
      </section>
    )
  }
}

export default Projects;