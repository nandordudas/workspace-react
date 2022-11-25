import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import type { MockStoreEnhanced } from 'redux-mock-store'

import { App } from './App'
import type { RootState } from './store'
import { state } from './store'
import type { TodoAction } from './store/todo/todo.slice'
import { mockStore } from './tests/mock-store'

describe('App', () => {
  let mockedStore: MockStoreEnhanced<RootState, TodoAction>

  const mockedState: RootState = {
    ...state,
    todo: {
      ...state.todo,
    },
  }

  beforeEach(() => {
    mockedStore = mockStore(mockedState)
  })

  it('should render application properly', async () => {
    expect.hasAssertions()

    render(
      <Provider store={mockedStore}>
        <App />
      </Provider>,
    )

    expect(screen.getByText('Todo App')).toBeTruthy()
    expect(await (await fetch('https://jsonplaceholder.typicode.com/todos')).json()).toMatchInlineSnapshot(`
      [
        {
          "completed": true,
          "id": 2,
          "title": "we are going to the moon",
          "userId": 4,
        },
      ]
    `)
  })

  it.todo('should request todo list from the endpoint')
})
