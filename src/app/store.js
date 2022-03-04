
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/expense.slice'

export default configureStore({
  reducer: {
    counter: counterReducer 
  }
})