import { IProject } from "../../types/Project.interface"

interface ISort {
  byDate: (projects: IProject[]) => IProject[],
  inAlphabet: (sorting: string[]) => string[]
}

class Sort implements ISort {
  byDate(projects: IProject[]) {
    const copiedProjects = projects.map(_ => _) 

    return copiedProjects.sort((a: IProject, b: IProject) => {
      const [day1, month1, year1] = a.date.split('.').map(_ => Number(_)) 
      const [day2, month2, year2] = b.date.split('.').map(_ => Number(_)) 

      if (year1 !== year2) {
        return year2 - year1
      }

      if (month1 !== month2) {
        return month2 - month1
      }

      return day2 - day1
    })
  } 

  inAlphabet(sorting: string[]) {
    const copiedArray = sorting.map(_ => _)
    return copiedArray.sort()
  }
}

export const sort = new Sort()