import DateFormatter from './date-formatter'
import ProjectTitle from './project-title'
import CoverImage from './cover-image'
import Tag from './tag'

type Props = {
  title: string
  coverImage: string
  date: string
  tags: string
}

const ProjectHeader = ({ title, coverImage, date, tags}: Props) => {
  return (
    <>
      <ProjectTitle>{title}</ProjectTitle>
      <div className="flex justify-around mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
          {tags.split(" ").map(tag => <Tag tag text={tag} key={tag} />)}
        </div>
      </div>
    </>
  )
}

export default ProjectHeader
