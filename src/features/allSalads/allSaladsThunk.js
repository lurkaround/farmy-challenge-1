// import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';
import { dataService } from '../../utils/dataService';

export const getAllSaladsThunk = async (_, thunkAPI) => {
  try {
    const resp = await dataService.get('salads');
    return resp;
  } catch (error) {
    return error.msg;
  }
};
