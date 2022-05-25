import { configureStore } from '@reduxjs/toolkit';

import allSaladsSlice from './features/allSalads/allSaladsSlice';
import saladSlice from './features/salad/saladSlice';
import allProductsSlice from './features/allProducts/allProductsSlice';

export const store = configureStore({
  reducer: {
    allSalads: allSaladsSlice,
    salad: saladSlice,
    allProducts: allProductsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
