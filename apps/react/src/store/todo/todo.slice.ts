import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { StoreNames } from 'store/constants'

import { getItemIndex } from './todo.slice.constants'
import type { Todo, TodoState } from './todo.state'
import { todoState as initialState } from './todo.state'
import {
  createTodoThunk,
  deleteTodoThunk,
  getAllTodosThunk,
  modifyTodoThunk,
  toggleTodoStatusThunk,
} from './todo.thunks'

export const todoSlice = createSlice({
  name: StoreNames.Todo,
  initialState,
  reducers: {
    addTodo(state: TodoState, action: PayloadAction<Todo>) {
      state.items.push(action.payload)
    },
    removeTodo(state: TodoState, action: PayloadAction<Todo['id']>) {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    editTodo(state: TodoState, action: PayloadAction<Todo>) {
      const itemIndex = getItemIndex(state, action.payload.id)

      state.edit = null
      state.items[itemIndex] = {
        ...state.items[itemIndex],
        ...action.payload,
      }
    },
    setTodoStatus(state: TodoState, action: PayloadAction<Todo>) {
      const itemIndex = getItemIndex(state, action.payload.id)

      state.items[itemIndex] = {
        ...state.items[itemIndex],
        completed: action.payload.completed,
      }
    },
    toggleTodoStatus(state: TodoState, action: PayloadAction<Todo>) {
      const itemIndex = getItemIndex(state, action.payload.id)

      state.items[itemIndex] = {
        ...state.items[itemIndex],
        completed: !state.items[itemIndex].completed,
      }
    },
    addToEdit(state: TodoState, { payload }: PayloadAction<Todo>) {
      state.edit = payload
    },
  },
  extraReducers({ addCase }) {
    addCase(getAllTodosThunk.fulfilled, (state, action) => {
      state.items = action.payload!
    })

    addCase(createTodoThunk.fulfilled, (state, action) => {
      state.items.push(action.payload!)
    })

    addCase(toggleTodoStatusThunk.fulfilled, (state, action) => {
      const itemIndex = getItemIndex(state, action.payload?.id)

      state.items[itemIndex] = {
        ...state.items[itemIndex],
        completed: action.payload?.completed ?? false,
      }
    })

    addCase(modifyTodoThunk.fulfilled, (state, action) => {
      const itemIndex = getItemIndex(state, action.payload?.id)

      state.edit = null
      state.items[itemIndex] = {
        ...state.items[itemIndex],
        ...action.payload,
      }
    })

    addCase(deleteTodoThunk.fulfilled, (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload)
    })
  },
})

export type TodoAction = ReturnType<typeof todoSlice.actions[keyof typeof todoSlice.actions]>

export const {
  addTodo,
  addToEdit,
  editTodo,
  removeTodo,
  toggleTodoStatus,
} = todoSlice.actions

export default todoSlice.reducer
