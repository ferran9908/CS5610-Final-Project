import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import AuthReducer from './slices/authSlice'
import ProfileReducer from './slices/profileSlice'
import HouseReducer from './slices/houseSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const reducers = combineReducers({
  auth: AuthReducer,
  profile: ProfileReducer,
  houses: HouseReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})


// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }