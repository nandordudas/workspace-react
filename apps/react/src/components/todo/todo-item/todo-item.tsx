import { useAppDispatch } from 'store'
import { addToEdit } from 'store/todo/todo.slice'
import type { Todo } from 'store/todo/todo.state'
import { deleteTodoThunk, toggleTodoStatusThunk } from 'store/todo/todo.thunks'

export const TodoItem = ({ id, title, completed }: Todo) => {
  const dispatch = useAppDispatch()

  return (
    <div className="d-flex align-items-center justify-content-between border-bottom pb-2">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleTodoStatusThunk({ id, completed: !completed }))}
          id={`${id}`}
        />
        <label
          className="form-check-label"
          htmlFor={`${id}`}
        >
          {title}
        </label>
      </div>
      <div className="d-flex gap-1">
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={() => dispatch(addToEdit({ id, title, completed, userId: 1 }))}
        >
          <i className="bi bi-pencil-fill" />
        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => dispatch(deleteTodoThunk(id))}
        >
          <i className="bi bi-trash-fill" />
        </button>
      </div>
    </div>
  )
}
