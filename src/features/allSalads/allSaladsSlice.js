import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getAllSaladsThunk } from './allSaladsThunk';

const initialFiltersState = {
  search: '',
  searchStatus: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};

const initialState = {
  isLoading: true,
  salads: [],
  ...initialFiltersState,
};

export const getAllSalads = createAsyncThunk(
  'allSalads/getSalads',
  getAllSaladsThunk
);

const allSaladsSlice = createSlice({
  name: 'allSalads',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearFilters: (state) => {
      return { ...state, ...initialFiltersState };
    },
    clearAllSaladsState: (state) => initialState,
  },
  extraReducers: {
    [getAllSalads.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllSalads.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.salads = payload;
      state.totalsalads = payload.totalsalads;
    },
    [getAllSalads.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const {
  showLoading,
  hideLoading,
  handleChange,
  clearFilters,
  clearAllSaladsState,
} = allSaladsSlice.actions;

export default allSaladsSlice.reducer;
