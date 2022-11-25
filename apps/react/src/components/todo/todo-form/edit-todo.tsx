import type { FormEvent } from 'react'
import { useCallback, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store'
import { selectEdit } from 'store/todo/todo.selectors'
import { modifyTodoThunk } from 'store/todo/todo.thunks'

const defaultInputValue = ''

export const EditTodo = () => {
  const dispatch = useAppDispatch()
  const todo = useAppSelector(selectEdit)
  const [inputState, setInputState] = useState(todo?.title || defaultInputValue)

  useEffect(() => {
    setInputState(todo?.title || defaultInputValue)
  }, [todo])

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setInputState('')

    if (!todo)
      return

    dispatch(
      modifyTodoThunk({
        ...todo,
        title: inputState,
      }),
    )
  }, [dispatch, inputState, todo])

  return (
    <form
      className="input-group"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="form-control"
        value={inputState}
        onChange={({ target }) => setInputState(target.value)}
        autoFocus
      />
      <button
        className="btn btn-warning"
        type="submit"
      >
        Edit
      </button>
    </form>
  )
}
