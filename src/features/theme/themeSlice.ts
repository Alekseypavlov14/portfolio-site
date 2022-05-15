import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './../../app/store'

const initialState = 'light'

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    dark: () => {
      return 'dark'
    },
    light: () => {
      return 'light'
    }
  }
})

export const themeReducer = themeSlice.reducer
export const { dark, light } = themeSlice.actions
export const themeSelector = (state: RootState) => state.theme