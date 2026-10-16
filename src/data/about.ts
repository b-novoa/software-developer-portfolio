
export type Specialty = {
  id: string
  title: string
  description: string
  icon: 'server' | 'architecture' | 'problem' | 'learning'
}

export const specialties: Specialty[] = [
  {
    id: 'backend',
    title: 'Backend Development',
    description:
      'Building reliable APIs and backend applications with maintainability in mind.',
    icon: 'server',
  },
  {
    id: 'architecture',
    title: 'Software Architecture',
    description:
      'Exploring clean design principles and scalable software structures.',
    icon: 'architecture',
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    description:
      'Breaking down complex challenges into practical technical solutions.',
    icon: 'problem',
  },
  {
    id: 'learning',
    title: 'Continuous Learning',
    description:
      'Improving my skills and exploring technologies across the software ecosystem.',
    icon: 'learning',
  },
]

export const technologies = [
  'Java',
  'Spring Boot',
  'PostgreSQL',
  'Docker',
  'Git',
  'React',
  'TypeScript',
  'JUnit',
]
