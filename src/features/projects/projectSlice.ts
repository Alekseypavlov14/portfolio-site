import { createSlice } from '@reduxjs/toolkit'
import { query } from './../../business/query/Query'
import { IProject } from './../../types/Project.interface'
import { RootState } from './../../app/store'
import projects from './../../data/projects.json'

interface InitialState {
  readonly projects: IProject[],
  filteredProjects: IProject[],
  SORT_KEYS: string[]
}

interface SortAction {
  payload: string[]
}

const initialState: InitialState = {
  projects: projects,
  filteredProjects: projects,
  SORT_KEYS: []
}

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    sort(state, action: SortAction) {
      state.filteredProjects = query.sort(
        state.projects, action.payload
      )
      state.SORT_KEYS = action.payload
    }
  }
})

export const projectReducer = projectSlice.reducer
export const { sort } = projectSlice.actions
export const projectsSelector = (state: RootState) => state.project.filteredProjects
export const sortKeysSelector = (state: RootState) => state.project.SORT_KEYS