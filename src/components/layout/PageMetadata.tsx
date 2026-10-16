
import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { projects } from '../../data/projects'

type Metadata = {
  title: string
  description: string
}

const pageMetadata: Record<string, Metadata> = {
  '/': {
    title: 'Brahyan Novoa | Software Engineer',
    description:
      'Software Engineer specializing in Java, Spring and software architecture.',
  },
  '/about': {
    title: 'About Me | Brahyan Novoa',
    description:
      'Learn about my software engineering journey, technical skills and interests.',
  },
  '/projects': {
    title: 'Projects | Brahyan Novoa',
    description:
      'Explore my software development projects, technologies and technical decisions.',
  },
  '/experience': {
    title: 'Experience | Brahyan Novoa',
    description:
      'Discover my professional experience in Java, Spring and enterprise software development.',
  },
  '/contact': {
    title: 'Contact | Brahyan Novoa',
    description:
      'Get in touch with Brahyan Novoa for software engineering opportunities.',
  },
}

function PageMetadata() {
  const { pathname } = useLocation()

  const slug = pathname.startsWith('/projects/')
    ? pathname.split('/')[2]
    : undefined

  const project = projects.find(
    (item) => item.slug === slug
  )

  const metadata: Metadata = project
    ? {
        title: `${project.title} | Brayan Novoa`,
        description: project.description,
      }
    : pageMetadata[pathname] ?? {
        title: 'Page Not Found | Brayan Novoa',
        description: 'Page not found.',
      }

  useEffect(() => {
    document.title = metadata.title

    const metaDescription =
      document.querySelector<HTMLMetaElement>(
        'meta[name="description"]'
      )

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        metadata.description
      )
    }
  }, [metadata.title, metadata.description])

  return null
}

export default PageMetadata
