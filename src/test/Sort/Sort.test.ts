import { IProject } from './../../types/Project.interface';
import { sort } from "../../utils/Sort"

const arrayToSortByYear: IProject[] = [
  {
    name: '',
    description: '',
    link: '',
    repository: '',
    date: '22.06.21',
    technologies: ['HTML', 'CSS', 'Webpack']
  },
  {
    name: '',
    description: '',
    link: '',
    repository: '',
    date: '21.05.22',
    technologies: ['HTML', 'JS', 'Gulp']
  }
]

test('sort the difference between years', () => {
  expect(sort.byDate(arrayToSortByYear)[0].date).toBe('21.05.22')
})

const arrayToSortByMonth: IProject[] = [
  {
    name: '',
    description: '',
    link: '',
    repository: '',
    date: '21.03.21',
    technologies: ['HTML', 'CSS', 'Webpack']
  },
  {
    name: '',
    description: '',
    link: '',
    repository: '',
    date: '21.05.21',
    technologies: ['HTML', 'JS', 'Gulp']
  }
]

test('sort with difference between months', () => {
  expect(sort.byDate(arrayToSortByMonth)[0].date).toBe('21.05.21')
})

const arrayToSortByDay: IProject[] = [
  {
    name: '',
    description: '',
    link: '',
    repository: '',
    date: '21.05.21',
    technologies: ['HTML', 'CSS', 'Webpack']
  },
  {
    name: '',
    description: '',
    link: '',
    repository: '',
    date: '22.05.21',
    technologies: ['HTML', 'JS', 'Gulp']
  }
]

test('sort with difference between days', () => {
  expect(sort.byDate(arrayToSortByDay)[0].date).toBe('22.05.21')
})

const complicatedProjects: IProject[] = [
  {
    name: '',
    description: '',
    link: '',
    repository: '',
    date: '21.05.21',
    technologies: ['HTML', 'CSS', 'Webpack']
  },
  {
    name: '',
    description: '',
    link: '',
    repository: '',
    date: '22.05.21',
    technologies: ['HTML', 'JS', 'Gulp']
  },
  {
    name: '',
    description: '',
    link: '',
    repository: '',
    date: '21.06.21',
    technologies: ['HTML', 'CSS', 'Webpack']
  },
  {
    name: '',
    description: '',
    link: '',
    repository: '',
    date: '21.05.21',
    technologies: ['HTML', 'JS', 'Gulp']
  },
  {
    name: '',
    description: '',
    link: '',
    repository: '',
    date: '21.05.23',
    technologies: ['HTML', 'CSS', 'Webpack']
  },
  {
    name: '',
    description: '',
    link: '',
    repository: '',
    date: '24.05.21',
    technologies: ['HTML', 'JS', 'Gulp']
  }
]

test('complicated array', () => {
  const dates = sort.byDate(complicatedProjects).map(_ => _.date)

  expect(dates).toStrictEqual([
    '21.05.23',
    '21.06.21',
    '24.05.21',
    '22.05.21',
    '21.05.21',
    '21.05.21'
  ])
})

const priorityArray: IProject[] = [
  {
    name: '',
    description: '',
    link: '',
    repository: '',
    date: '21.05.23',
    technologies: ['HTML', 'CSS', 'Webpack']
  },
  {
    name: '',
    description: '',
    link: '',
    repository: '',
    date: '24.05.21',
    technologies: ['HTML', 'JS', 'Gulp']
  },
  {
    name: '',
    description: '',
    link: '',
    repository: '',
    date: '22.06.22',
    technologies: ['HTML', 'JS', 'Gulp']
  }
]

test('priority of values', () => {
  expect(sort.byDate(priorityArray)[0].date).toBe('21.05.23')
})

const ImmutableArray: IProject[] = [
  {
    name: '',
    description: '',
    link: '',
    repository: '',
    date: '24.05.21',
    technologies: ['HTML', 'JS', 'Gulp']
  },
  {
    name: '',
    description: '',
    link: '',
    repository: '',
    date: '21.05.23',
    technologies: ['HTML', 'CSS', 'Webpack']
  },
  {
    name: '',
    description: '',
    link: '',
    repository: '',
    date: '24.05.21',
    technologies: ['HTML', 'JS', 'Gulp']
  }
]

test('immutable array', () => {
  const sortedArray = sort.byDate(ImmutableArray)

  expect(sortedArray[0].date).toBe('21.05.23')
  expect(ImmutableArray[0].date).toBe('24.05.21')
})

const AlphabetArray = [
  'fs',
  'abs',
  'bcs'
]

test('By Letter', () => {
  expect(sort.inAlphabet(AlphabetArray)[0]).toBe('abs')
})