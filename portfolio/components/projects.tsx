import SectionHeader from '../components/section-header'

const Projects = () => {
  return (
    <div>
      <SectionHeader header="projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-16">
        <div className="bg-gray-200">1</div>
        <div className="bg-gray-200">9</div>
      </div>
    </div>
  )
}

export default Projects