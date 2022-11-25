import { TodoItem } from 'components/todo/todo-item'
import { useAppSelector } from 'store'
import { selectTodos } from 'store/todo/todo.selectors'

export const TodoList = () => {
  const todos = useAppSelector(selectTodos)

  return (
    <div className="container d-grid gap-2">
      {todos.map(todo => (
        <TodoItem {...todo} key={todo.id} />
      ))}
    </div>
  )
}
