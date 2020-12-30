import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import ProjectBody from '../../components/project-body'
import Header from '../../components/header'
import ProjectHeader from '../../components/project-header'
import Layout from '../../components/layout'
import { getProjectBySlug, getAllProjects } from '../../lib/api'
import ProjectTitle from '../../components/project-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import ProjectType from '../../types/project'

type Props = {
  project: ProjectType
}

const Project = ({ project }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <ProjectTitle>Loading…</ProjectTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  Eliza Zijin Huang's Portfolio - code, research, blog and more.
                </title>
                <meta property="og:image" content={project.ogImage.url} />
              </Head>
              <ProjectHeader
                title={project.title}
                coverImage={project.coverImage}
                date={project.date}
                author={project.author}
              />
              <ProjectBody content={project.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Project

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const project = getProjectBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(project.content || '')

  return {
    props: {
      project: {
        ...project,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const projects = getAllProjects(['slug'])

  return {
    paths: projects.map((projects) => {
      return {
        params: {
          slug: projects.slug,
        },
      }
    }),
    fallback: false,
  }
}
