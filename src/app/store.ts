import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { themeReducer } from './../features/theme/themeSlice'
import { projectReducer } from '../features/project/projectSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    project: projectReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
