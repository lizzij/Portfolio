import SectionHeader from '../components/section-header'
import ProjectPreview from './project-preview'
import Project from '../types/project'

type Props = {
  projects: Project[]
}

const Projects = ({ projects }: Props) => {
  return (
    <div>
      <SectionHeader header="projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-16">
        {projects.map((project) => (
          <ProjectPreview
            key={project.slug}
            title={project.title}
            coverImage={project.coverImage}
            date={project.date}
            slug={project.slug}
            excerpt={project.excerpt}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects