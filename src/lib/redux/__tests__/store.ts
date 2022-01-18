import { configureStore } from '@reduxjs/toolkit';
import { appStateReducer } from '../slices/appStateSlice';
import { userReducer } from '../slices/userSlice';

export const createStore = () =>
  configureStore({
    reducer: {
      user: userReducer,
      appState: appStateReducer,
    },
  });