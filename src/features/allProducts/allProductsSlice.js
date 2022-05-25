import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getAllProductsThunk } from './allProductsThunk';

const initialFiltersState = {
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};

const initialState = {
  isLoading: true,
  products: [],
  ...initialFiltersState,
};

export const getAllProducts = createAsyncThunk(
  'allProducts/getProducts',
  getAllProductsThunk
);

const allProductsSlice = createSlice({
  name: 'allProducts',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    extraReducers: {
      [getAllProducts.pending]: (state) => {
        state.isLoading = true;
      },
      [getAllProducts.fulfilled]: (state, { payload }) => {
        state.isLoading = false;
        state.products = payload;
      },
      [getAllProducts.rejected]: (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      },
    },
  },
});

export const { showLoading, hideLoading } = allProductsSlice.actions;

export default allProductsSlice.reducer;
