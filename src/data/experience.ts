
export type WorkExperience = {
    id: string
    company: string
    position: string
    startDate: string
    endDate?: string
    location: string
    workMode: 'Remote' | 'Hybrid' | 'On-site'
    technologies: string[]
    responsibilities: string[]
}

export const experiences: WorkExperience[] = [
    {
        id: 'globant',
        company: 'Globant',
        position: 'Java Developer Advance',
        startDate: 'Aug 2024',
        location: 'Madrid, Spain',
        workMode: 'Hybrid',
        technologies: [
            'Java 8 / 21',
            'Spring',
            'JUnit',
            'Mockito',
            'Docker',
            'AWS',
            'GitHub Actions',
            'SonarQube',
        ],
        responsibilities: [
            'Designed and developed new backend functionalities from scratch.',
            'Refactored legacy code to improve maintainability and code quality.',
            'Applied TDD practices using JUnit and Mockito.',
            'Implemented CI/CD pipelines with GitHub Actions.',
            'Performed code reviews and static analysis using SonarQube and CodeScene.',
            'Applied SOLID principles and design patterns.',
            'Developed SOAP integrations and worked with cloud infrastructure on AWS.',
        ],
    },
    {
        id: 'minsait',
        company: 'Minsait',
        position: 'Software Technician',
        startDate: 'Jun 2023',
        endDate: 'Aug 2024',
        location: 'Madrid, Spain',
        workMode: 'Remote',
        technologies: [
            'Java 8 / 11',
            'Spring 5',
            'React',
            'jQuery',
            'SVN',
        ],
        responsibilities: [
            'Developed full-stack functionalities using Java, Spring, React and jQuery.',
            'Worked directly with databases to maintain data integrity and efficiency.',
            'Analyzed business requirements and translated them into technical solutions.',
            'Produced technical documentation and testing reports.',
        ],
    },
    {
        id: 'eqtic',
        company: 'EQTIC',
        position: 'Backend Developer Junior',
        startDate: 'Jul 2022',
        endDate: 'May 2023',
        location: 'Barcelona, Spain',
        workMode: 'Remote',
        technologies: [
            'Java 6 / 8 / 11',
            'Spring 5',
            'JavaScript',
            'Git',
        ],
        responsibilities: [
            'Developed and maintained existing Java applications.',
            'Implemented new features using the Spring Framework.',
            'Contributed to frontend functionality using JavaScript.',
        ],
    },
    {
        id: 'ntt-data',
        company: 'NTT DATA',
        position: 'Backend Developer Intern',
        startDate: 'Mar 2022',
        endDate: 'Jun 2022',
        location: 'Madrid, Spain',
        workMode: 'On-site',
        technologies: [
            'Java 11',
            'Spring Boot',
            'Git',
        ],
        responsibilities: [
            'Contributed to application maintenance and interface improvements.',
            'Implemented basic software components under supervision.',
            'Collaborated with other developers in a professional engineering environment.',
        ],
    },
]
