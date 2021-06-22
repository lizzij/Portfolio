import SectionHeader from '../components/section-header'
import ProjectPreview from './project-preview'
import Project from '../types/project'

type Props = {
  ready?: boolean
  projects: Project[]
}

const Projects = ({ ready = false, projects }: Props) => {
  return (
    ready ?
    <div id="works">
      <SectionHeader header="projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-16">
        {projects.map((project) => (
          <ProjectPreview
            key={project.slug}
            title={project.title}
            coverImage={project.coverImage}
            slug={project.slug}
            excerpt={project.excerpt}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
    :
    <div id="works">
      <SectionHeader header="projects" />
      <div>Coming soon...</div>
    </div>
  )
}

export default Projects
