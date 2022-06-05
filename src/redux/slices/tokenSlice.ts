import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { response } from './mockData';

export function fetchRequest() {
  return new Promise((resolve, reject) =>
    // successfully
    // setTimeout(() => resolve({ data: response }), 0)

    // failed
    setTimeout(() => reject({ data: 'Something error' }), 0)
  );
}
const initialState = {
  data: [],
};

export const fetchDataUserList = createAsyncThunk(
  'token/user',
  async (payload, { rejectWithValue }) => {
    try {
      const response = (await fetchRequest()) as { data: any[] };
      return response.data;
    } catch (err) {
      return rejectWithValue(err.data);
    }
  }
);

export const tokenManagementSlice = createSlice({
  name: 'token-management',
  initialState,
  reducers: {
    updateListToken: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataUserList.pending, (state) => {
      // pending status
    });
    builder.addCase(fetchDataUserList.fulfilled, (state, { payload }) => {
      state.data = payload;
    });

    builder.addCase(fetchDataUserList.rejected, (state, { payload }) => {
      console.log(payload, '%c<----');
    });
  },
});

export const tokenManagementAction = tokenManagementSlice.actions;

export const selectDataList = (state) => state.tokenManagement;

export default tokenManagementSlice.reducer;
