import type { RootState } from 'store'

export const selectTodos = ({ todo }: RootState) => todo.items

export const selectEdit = ({ todo }: RootState) => todo.edit
