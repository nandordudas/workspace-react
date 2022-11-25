import { createAsyncThunk } from '@reduxjs/toolkit'
import type { RootThunkConfig } from 'store'

import todoApi from '~/composables/todo-api'
import type { Todo } from '~/store/todo/todo.state'

export const getAllTodosThunk = createAsyncThunk<Todo[] | null, void, RootThunkConfig>(
  'todos/getAllTodosThunk',
  () => todoApi.getAll(),
)

export const createTodoThunk = createAsyncThunk<Todo | null, Todo['title'], RootThunkConfig>(
  'todos/createTodoThunk',
  title => todoApi.create(title),
)

export const toggleTodoStatusThunk = createAsyncThunk<Todo | null, Pick<Todo, 'id' | 'completed'>, RootThunkConfig>(
  'todos/toggleTodoStatusThunk',
  item => todoApi.toggleStatus(item),
)

export const modifyTodoThunk = createAsyncThunk<Todo | null, Todo, RootThunkConfig>(
  'todos/modifyTodoThunk',
  todo => todoApi.modify(todo),
)

export const deleteTodoThunk = createAsyncThunk<number | null, Todo['id'], RootThunkConfig>(
  'todos/deleteTodoThunk',
  id => todoApi.delete(id),
)
