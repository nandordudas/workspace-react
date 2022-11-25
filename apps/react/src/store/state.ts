import type { RootState } from 'store'

import { StoreNames } from './constants'
import { todoState } from './todo/todo.state'

export const state: RootState = {
  [StoreNames.Todo]: todoState,
}
