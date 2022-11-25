import { EditTodo } from 'components/todo/todo-form/edit-todo'
import { NewTodo } from 'components/todo/todo-form/new-todo'
import { useAppSelector } from 'store'
import { selectEdit } from 'store/todo/todo.selectors'

export const TodoForm = () => {
  const isEditing = useAppSelector(selectEdit)

  if (isEditing) {
    return (
      <div className="container my-5">
        <EditTodo />
      </div>
    )
  }

  return (
    <div className="container my-5">
      <NewTodo />
    </div>
  )
}
