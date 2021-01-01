import Tag from './tag'
import Link from 'next/link'

type Props = {
  title: string
  coverImage: string
  excerpt: string
  slug: string
  tags: string
}

const ProjectPreview = ({
  title,
  coverImage,
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
            <div className="flex flex-wrap">
              <h3 className="text-white text-lg md:text-xl pb-1">
                {title}
              </h3>
              <div className="lg:pt-0.5">
                {tags.split(" ").map(tag => <Tag dark text={tag} key={tag} />)}
              </div>
            </div>
            <p className="text-gray-500">{excerpt}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProjectPreview
