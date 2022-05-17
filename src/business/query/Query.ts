import { IProject } from './../../types/Project.interface'

interface IQuery {
  sort(projects: IProject[], technologies: string[]): IProject[]
}

class Query implements IQuery {
  sort(projects: IProject[], technologies: string[]) {
    return projects.filter((project: IProject) => {
      let decision: boolean = true

      technologies.forEach((technology: string) => {
        if (!project.technologies.includes(technology)) {
          decision = false
        }
      })

      return decision
    })
  }
}

export const query = new Query();