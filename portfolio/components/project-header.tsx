import DateFormatter from './date-formatter'
import ProjectTitle from './project-title'

type Props = {
  title: string
  date: string
}

const ProjectHeader = ({ title, date}: Props) => {
  return (
    <>
      <ProjectTitle>{title}</ProjectTitle>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default ProjectHeader
