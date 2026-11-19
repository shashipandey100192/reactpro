import { configureStore } from '@reduxjs/toolkit'
import  Myslicer  from './Actionslist'

export const Myactionstore = configureStore({
  reducer: {
    counter:Myslicer
  }
})