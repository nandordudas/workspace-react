import { baseUrl } from '~/composables/todo-api.constants'
import type { Todo } from '~/store/todo/todo.state'
import { fetchJSON } from '~/utils'

const apiUrl = `${baseUrl}/todos`

class TodoApi {
  async getAll() {
    const { data, error } = await fetchJSON<Todo[]>(apiUrl)

    if (error)
      return null

    return data
  }

  async create(title: Todo['title']) {
    const { data, error } = await fetchJSON<Todo>(apiUrl, {
      method: 'post',
      body: JSON.stringify({
        title,
        userId: 1,
        completed: false,
      }),
    })

    if (error)
      return null

    return data
  }

  async toggleStatus({ id, completed }: Pick<Todo, 'id' | 'completed'>) {
    const { data, error } = await fetchJSON<Todo>(`${apiUrl}/${id}`, {
      method: 'patch',
      body: JSON.stringify({
        userId: 1,
        completed,
      }),
    })

    if (error)
      return null

    return data
  }

  async modify(todo: Todo) {
    const { data, error } = await fetchJSON<Todo>(`${apiUrl}/${todo.id}`, {
      method: 'put',
      body: JSON.stringify(todo),
    })

    if (error)
      return null

    return data
  }

  async delete(id: Todo['id']) {
    const { error } = await fetchJSON(`${apiUrl}/${id}`, {
      method: 'delete',
    })

    if (error)
      return null

    return id
  }
}

export default new TodoApi()
