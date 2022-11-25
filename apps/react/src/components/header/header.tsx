import { useAppSelector } from 'store'
import { selectTodos } from 'store/todo/todo.selectors'

export const Header = () => {
  const todos = useAppSelector(selectTodos)
  const undoneTasksCounter = todos.filter(todo => !todo.completed).length

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container d-flex justify-content-between">
        <span className="navbar-brand d-flex align-items-center">
          <img src="./vite.svg" alt="Logo" width="30" height="24" className="d-inline-block" />
          Todo App
        </span>
        <div className="text-white d-flex">
          <div>Tasks</div>
          <div className="px-2 ms-1 rounded-pill bg-danger">
            {undoneTasksCounter}
          </div>
        </div>
      </div>
    </nav>
  )
}
