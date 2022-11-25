import type { FormEvent } from 'react'
import { useCallback, useState } from 'react'
import { useAppDispatch } from 'store'
import { createTodoThunk } from 'store/todo/todo.thunks'

const defaultInputValue = ''

export const NewTodo = () => {
  const [inputState, setInputState] = useState(defaultInputValue)
  const dispatch = useAppDispatch()

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(createTodoThunk(inputState))
    setInputState(defaultInputValue)
  }, [dispatch, inputState])

  return (
    <form
      className="input-group"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="form-control"
        placeholder="Todo..."
        value={inputState}
        onChange={e => setInputState(e.target.value)}
      />
      <button
        className="btn btn-primary"
        type="submit"
      >
        Add
      </button>
    </form>
  )
}
