import { configureStore } from '@reduxjs/toolkit'
import employeeSlice from './Reducers';

export const store = configureStore({
  reducer: employeeSlice,

})