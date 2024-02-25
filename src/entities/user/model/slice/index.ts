import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../types';

const name = 'user';

const initialState: UserState = {
  data: null,
};

export const { actions, reducer } = createSlice({
  name,
  initialState,
  reducers: {},
});
