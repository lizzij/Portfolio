import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Button from './button'
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
  console.log("coverImage", coverImage)
  return (
    <div className="self-end">
      <Link as={`/projects/${slug}`} href="/projects/[slug]">
        <div className="bg-faded rounded-2xl md:rounded-3xl p-4"
          style={{
          backgroundImage: `url(${coverImage})`,
        }} >
          <h3 className="md:text-xl md:pb-1 hover:underline">{title}</h3>
          <div className="text-gray-600 md:pb-1">
            <DateFormatter dateString={date} />
            {tags.split(" ").map(tag => <Button tag text={tag} />)}
          </div>
          <p className="text-gray-500">{excerpt}</p>
        </div>
      </Link>
    </div>
  )
}

export default ProjectPreview
