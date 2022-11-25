import { combineReducers } from '@reduxjs/toolkit'

import { StoreNames } from './constants'
import todoReducer from './todo/todo.slice'

export const reducer = combineReducers({
  [StoreNames.Todo]: todoReducer,
})
