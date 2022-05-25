import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  createSaladThunk,
  deleteSaladThunk,
  editSaladThunk,
} from './saladThunk.js';

const initialState = {
  isLoading: false,
  isEditing: false,
};

export const createSalad = createAsyncThunk(
  'salad/createSalad',
  createSaladThunk
);

export const deleteSalad = createAsyncThunk(
  'salad/deleteSalad',
  deleteSaladThunk
);

export const editSalad = createAsyncThunk('salad/editSalad', editSaladThunk);

const saladSlice = createSlice({
  name: 'salad',
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearValues: () => {
      return {
        ...initialState,
      };
    },
    setEditSalad: (state, { payload }) => {
      console.log(payload);
      return { ...state, isEditing: true, ...payload };
    },
  },
  extraReducers: {
    [createSalad.pending]: (state) => {
      state.isLoading = true;
    },
    [createSalad.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success('Salad Created');
    },
    [createSalad.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [deleteSalad.fulfilled]: (state, { payload }) => {
      toast.success(payload);
    },
    [deleteSalad.rejected]: (state, { payload }) => {
      toast.error(payload);
    },
    [editSalad.pending]: (state) => {
      state.isLoading = true;
    },
    [editSalad.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success('Salad Modified...');
    },
    [editSalad.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const { handleChange, clearValues, setEditSalad } = saladSlice.actions;

export default saladSlice.reducer;
