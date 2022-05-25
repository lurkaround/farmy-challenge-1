// import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';
import { dataService } from './../../utils/dataService';

export const getAllProductsThunk = async (_, thunkAPI) => {
  try {
    const resp = await dataService.get('products');

    return resp;
  } catch (error) {
    return error.msg;
  }
};
