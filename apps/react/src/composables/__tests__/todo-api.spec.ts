import todoApi from '../todo-api'

const expectedTitle = 'we are going to the moon'

describe('Todo Api', () => {
  const api = todoApi

  it('should render application properly', async () => {
    expect.hasAssertions()

    expect(await api.getAll()).toEqual(expect.arrayContaining([
      expect.objectContaining({
        completed: expect.any(Boolean),
        id: expect.any(Number),
        title: expectedTitle,
        userId: expect.any(Number),
      }),
    ]))
  })
})
