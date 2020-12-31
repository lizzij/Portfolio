import DateFormatter from './date-formatter'
import ProjectTitle from './project-title'
import Button from './tag'

type Props = {
  title: string
  date: string
  tags: string
}

const ProjectHeader = ({ title, date, tags}: Props) => {
  return (
    <>
      <ProjectTitle>{title}</ProjectTitle>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
          {tags.split(" ").map(tag => <Button tag text={tag} key={tag} />)}
        </div>
      </div>
    </>
  )
}

export default ProjectHeader
