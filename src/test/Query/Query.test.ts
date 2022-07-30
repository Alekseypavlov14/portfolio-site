import { IProject } from '../../types/Project.interface'
import { query } from '../../utils/Query'

const projects: IProject[] = [
  {
    name: '',
    description: '',
    link: '',
    repository: '',
    date: '',
    technologies: ['HTML', 'CSS', 'Webpack']
  },
  {
    name: '',
    description: '',
    link: '',
    repository: '',
    date: '',
    technologies: ['HTML', 'JS', 'Gulp']
  },
  {
    name: '',
    description: '',
    link: '',
    repository: '',
    date: '',
    technologies: ['HTML', 'CSS', 'JS', 'TypeScript']
  },
  {
    name: '',
    description: '',
    link: '',
    repository: '',
    date: '',
    technologies: ['HTML']
  },
  {
    name: '',
    description: '',
    link: '',
    repository: '',
    date: '',
    technologies: []
  }
]

test('sort with less number of technologies', () => {
  expect(query.sort(projects, ['HTML']).length).toBe(4)
})

test('sort with more number of technologies', () => {
  expect(query.sort(projects, ['HTML', 'CSS', 'JS']).length).toBe(1)
})