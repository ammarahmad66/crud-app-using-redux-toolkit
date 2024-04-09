import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import userReducer from './features/users/userSlice'
import authReducer from './features/auth/authSlice'


const reducers = combineReducers({
  users: userReducer,
  auth: authReducer
});

const persistConfig = {
  key: 'key',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: () => [thunk]
})