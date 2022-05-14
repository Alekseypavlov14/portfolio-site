import { createSlice } from '@reduxjs/toolkit'

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