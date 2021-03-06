import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { EmployeesServiceInstance } from './services/EmployeesService'

export const getEmployees = createAsyncThunk(
  'getEmployees', async () => {
    return EmployeesServiceInstance.getAllEmployees();
  }
)

const initialState = {
  employees: [],
  status: null
}

export const employeesSlice = createSlice({
  name: 'employees',
  initialState: initialState,
  reducer: {},
  extraReducers: {
    [getEmployees.pending]: (state) => {
      state.status = 'loading'
    },
    [getEmployees.fulfilled]: (state, payload) => {
      state.employees = payload.payload.data.employees
      state.status = 'success'
    },
    [getEmployees.rejected]: (state) => {
      state.status = 'failed'
    }
  }
})

export const voteAction = employeesSlice.actions;
export default employeesSlice.reducer;
