import type { Todo, TodoState } from './todo.state'

export const getItemIndex = (state: TodoState, id?: Todo['id']) =>
  state.items.findIndex(item => item.id === id)
