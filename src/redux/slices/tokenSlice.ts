import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { response } from './mockData';

export function fetchRequest() {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: response }), 0)
  );
}
const initialState = {
  data: [],
};

export const fetchDataUserList = createAsyncThunk('token/user', async () => {
  const response = (await fetchRequest()) as { data: any[] };
  return response.data;
});

export const tokenManagementSlice = createSlice({
  name: 'token-management',
  initialState,
  reducers: {
    updateListToken: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    // @ts-ignore
    [fetchDataUserList.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const tokenManagementAction = tokenManagementSlice.actions;

export const selectDataList = (state) => state.tokenManagement;

export default tokenManagementSlice.reducer;
