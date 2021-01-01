import DateFormatter from './date-formatter'
import Tag from './tag'
import Link from 'next/link'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  slug: string
  tags: string
}

const ProjectPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  tags,
}: Props) => {
  return (
    <div className="self-end">
      <Link as={`/projects/${slug}`} href="/projects/[slug]">
        <div 
          className="bg-cover bg-center bg-no-repeat bg-center rounded-2xl md:rounded-3xl p-4"
          style={{backgroundImage: `url(${coverImage})`}} 
          >
          <div className="h-gap"></div>
          <div className="flex flex-col justify-end h-blurb bg-gradient-to-t from-black to-transparent rounded-2xl md:rounded-3xl -m-4 p-4">
            <h3 className="text-white text-lg md:text-xl pb-1">{title}</h3>
            <div className="text-gray-400 pb-1">
              <DateFormatter dateString={date} />
              {tags.split(" ").map(tag => <Tag dark text={tag} key={tag} />)}
            </div>
            <p className="text-gray-500">{excerpt}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProjectPreview
