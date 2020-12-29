import SectionHeader from '../components/section-header'
import GradCountdown from './grad-countdown'

const Projects = () => {
  return (
    <div>
      <SectionHeader header="projects" />
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

const Work = () => {
  return (
    <div>
      <Projects />
      <Experience />
      <Coursework />      
      <GradCountdown />
    </div>
  )
}

export default Work
