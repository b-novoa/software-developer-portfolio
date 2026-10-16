export type ProjectStatus =
    | 'concept'
    | 'in-development'
    | 'completed'

export type Project = {
    slug: string
    title: string
    description: string
    details: string
    technologies: string[]
    status: ProjectStatus

    // Información adicional para la página de detalle
    features?: string[]
    architecture?: string
    challenges?: string[]

    // Enlaces opcionales
    githubUrl?: string
    demoUrl?: string
}

export const projects: Project[] = [
    {
        slug: 'football-predictions',
        title: 'Football Predictions',
        description:
            'A platform for football prediction competitions between friends.',
        details:
            'A personal project exploring football tournaments, predictions, user groups and competition management.',
        technologies: [
            'Java',
            'Spring Boot',
            'React Native',
        ],
        status: 'in-development',
        features: [
            'Create competitions between friends',
            'Submit football predictions',
            'Track tournament rankings',
        ],
        architecture:
            'Planned architecture using a Java and Spring Boot backend with a React Native mobile application.',
        challenges: [
            'Designing a flexible competition system',
            'Defining the communication between frontend and backend',
        ],
    },
    {
        slug: 'gym-app',
        title: 'Gym App',
        description:
            'A fitness application focused on exercise guidance and progress.',
        details:
            'An application concept for helping users understand exercises, organize workouts and follow their training progress.',
        technologies: [
            'Mobile Development',
            'UI/UX',
        ],
        status: 'completed',
    },
    {
        slug: 'notes-app',
        title: 'Notes App',
        description:
            'A notes application focused on remmember things.',
        details:
            'An application concept for helping users understand exercises, organize workouts and follow their training progress.',
        technologies: [
            'React',
            'Java',
        ],
        status: 'concept',
    },
]
