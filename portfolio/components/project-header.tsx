import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import ProjectTitle from './project-title'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const ProjectHeader = ({ title, coverImage, date, author }: Props) => {
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
