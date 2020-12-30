import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const ProjectTitle = ({ children }: Props) => {
  return (
    <h1 className="flex justify-around text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
      {children}
    </h1>
  )
}

export default ProjectTitle
