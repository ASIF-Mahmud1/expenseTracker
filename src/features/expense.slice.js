import { createSlice } from '@reduxjs/toolkit'

export const expenseSlice = createSlice({  // see 1.
  name: 'expense',
  initialState: {
    value: 0,
    user: null,
    expenseList:[]
  },
  reducers: {

    addExpense:  (state, action) => {
    
       state.expenseList =[...state.expenseList,action.payload]  },
  }
})

export const { addExpense } = expenseSlice.actions

export default expenseSlice.reducer