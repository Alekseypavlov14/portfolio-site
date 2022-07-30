import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { themeReducer } from './../features/theme/themeSlice'
import { burgerReducer } from './../features/burger/burgerSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    burger: burgerReducer
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
