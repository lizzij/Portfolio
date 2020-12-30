import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const ProjectPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div>
      <Link as={`/projects/${slug}`} href="/projects/[slug]">
        <div className="bg-gray-100 rounded-2xl md:rounded-3xl p-4">
          <div className="mb-5">
            <CoverImage slug={slug} title={title} src={coverImage} />
          </div>
          <h3>
            {title}
          </h3>
          <div className="text-lg mb-4">
            <DateFormatter dateString={date} />
          </div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </Link>
    </div>
  )
}

export default ProjectPreview
