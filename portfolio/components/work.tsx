import SectionHeader from '../components/section-header'
import ProjectMenu from '../components/project-menu'

const Projects = () => {
  return (
    <div>
      <SectionHeader header="experience" />
      <ProjectMenu />
    </div>
  )
}

const Experience = () => {
  return (
    <div>
      <SectionHeader header="experience" />
    </div>
  )
}

const Coursework = () => {
  return (
    <div>
      <SectionHeader header="coursework" />
    </div>
  )
}

const Countdown = () => {
  return (
    <div>
      <SectionHeader header="countdown" />
    </div>
  )
}

const Work = () => {
  return (
    <div>
      <Projects />
      <Experience />
      <Coursework />      
      <Countdown />
    </div>
  )
}

export default Work
