import Link from 'next/link'

type Props = {
  title: string
  src: string
  slug?: string
  width: number
  height: number
}

const CoverImage = ({ title, src, slug, width, height }: Props) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className="rounded-2xl md:rounded-3xl"
      width={width}
      height={height}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/projects/${slug}`} href="/projects/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
