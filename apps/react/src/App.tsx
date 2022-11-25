import './App.css'

import { useEffect } from 'react'

import { Header } from './components/header'
import { TodoForm } from './components/todo/todo-form'
import { TodoList } from './components/todo/todo-list'
import { useAppDispatch } from './store'
import { getAllTodosThunk } from './store/todo/todo.thunks'

export const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllTodosThunk())
  }, [dispatch])

  return (
    <div className="app">
      <Header />
      <div className="wrapper">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  )
}
