import {configureStore} from '@reduxjs/toolkit';
// const reduxLogger = require("redux-logger");
import bottomTabs from './slices/bottomTabs';
import apiReducer from './slices/apiSlice';
const store = configureStore({
  reducer: {
    bottomTabs: bottomTabs,
    api: apiReducer,
  },
});

export default store;
