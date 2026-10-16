import type { ProjectStatus } from './projects'

export const statusLabels: Record<ProjectStatus, string> = {
  concept: 'Concept',
  'in-development': 'In Development',
  completed: 'Completed',
}

export const statusColors: Record<ProjectStatus, string> = {
  concept: 'text-slate-400',
  'in-development': 'text-yellow-400',
  completed: 'text-[#A2FFCB]',
}
