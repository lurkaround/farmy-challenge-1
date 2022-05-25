import { dataService } from './../../utils/dataService';
import {
  showLoading,
  hideLoading,
  getAllSalads,
} from '../allSalads/allSaladsSlice';
import { clearValues } from './saladSlice';

export const createSaladThunk = async (salad, thunkAPI) => {
  try {
    const resp = await dataService.create('salads', salad);
    thunkAPI.dispatch(clearValues());
    return resp;
  } catch (error) {
    return error;
  }
};
export const deleteSaladThunk = async (id, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const resp = await dataService.delete(`/salads/${id}`);
    thunkAPI.dispatch(getAllSalads());
    return resp;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());

    return error;
  }
};
export const editSaladThunk = async ({ saladId, salad }, thunkAPI) => {
  console.log(salad);
  try {
    const resp = await dataService.update(`salads/${saladId}`, salad);

    thunkAPI.dispatch(clearValues());
    return resp;
  } catch (error) {
    return error;
  }
};
