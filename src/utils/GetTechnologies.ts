import { IProject } from './../types/Project.interface'

export const getTechnologies = (projects: IProject[]) => {
  let technologies: string[] = []

  projects.forEach((project: IProject) => {
    technologies = technologies.concat(project.technologies)
  })

  technologies = Array.from(new Set(technologies))

  return technologies
}