import type { TodoState } from './todo.state'

export const initialState: TodoState['items'] = [
  {
    id: 1,
    title: 'First todo',
    completed: false,
    userId: 2,
  },
  {
    id: 2,
    title: 'Second todo',
    completed: true,
    userId: 4,
  },
  {
    id: 3,
    title: 'Third todo',
    completed: false,
    userId: 5,
  },
]
