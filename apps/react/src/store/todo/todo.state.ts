import { initialState as items } from './todo.constants'

export interface Todo {
  completed: boolean
  id: number
  title: string
  userId: number
}

export interface TodoState {
  edit: Todo | null
  items: Todo[]
}

export const todoState: TodoState = {
  edit: null,
  items,
}
