import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { query } from '../../business/query/Query'
import { IProject } from '../../types/Project.interface'
import { RootState } from '../../app/store'
import { getTechnologies } from './calculateInitialState'

interface InitialState {
  projects: IProject[],
  technologies: string[],
  filteredProjects: IProject[],
}

const initialState: InitialState = {
  projects: [],
  filteredProjects: [],
  technologies: [],
}

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    addProjects(state, action: PayloadAction<IProject[]>) {
      state.projects = action.payload
      state.filteredProjects = action.payload
      state.technologies = getTechnologies(action.payload)
    },
    sort(state, action: PayloadAction<string[]>) {
      state.filteredProjects = 
        query.sort(state.projects, action.payload)
    }
  }
})

export const projectReducer = projectSlice.reducer
export const { sort, addProjects } = projectSlice.actions
export const projectsSelector = (state: RootState) => state.project.projects
export const filteredProjectsSelector = (state: RootState) => state.project.filteredProjects
export const technologiesSelector = (state: RootState) => state.project.technologies