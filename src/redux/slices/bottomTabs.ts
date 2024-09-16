import {createSlice} from '@reduxjs/toolkit';
import {tabs} from '../../utils';
import {urls} from '../../config';

const initialState = <tabs.bottomTabs>{
  currentTheme: 'light', //true for light and false for dark
};

const bottomTabs = createSlice({
  name: 'bottomTabs',
  initialState,
  reducers: {
    toggleTheme: (
      state: tabs.bottomTabs,
      action: {type: any; payload: tabs.bottomTabs},
    ) => {
      state.currentTheme = action?.payload?.currentTheme
        ? action?.payload?.currentTheme
        : state.currentTheme;
    },
  },
});

export default bottomTabs.reducer;
export const {toggleTheme} = bottomTabs.actions;
