import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './slices/authSlice'
import ProfileReducer from './slices/profileSlice'

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    profile: ProfileReducer
  },
})
