import Container from '../components/container'
import Projects from '../components/projects'
import Intro from '../components/intro'
import SkillGraph from '../components/skill-graph'
import Work from '../components/work'
import Contact from '../components/contact'
import Layout from '../components/layout'
import { getAllProjects } from '../lib/api'
import Head from 'next/head'
import Project from '../types/project'

type Props = {
  allProjects: Project[]
}

const Index = ({ allProjects }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Eliza Zijin Huang - Portfolio</title>
        </Head>
        <Container>
          <Intro />
          <SkillGraph />
          <Work />
          <Contact />
          <Projects projects={allProjects} />
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allProjects = getAllProjects([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allProjects },
  }
}
