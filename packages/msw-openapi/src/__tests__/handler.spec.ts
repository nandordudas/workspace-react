import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import axios from 'axios'
import { setupServer } from 'msw/node'
import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
} from 'vitest'

import { createRequestHandlersFromOpenAPISpec } from '..'

const __dirname = fileURLToPath(new URL('../..', import.meta.url))

describe('MSW OpenAPI handler', () => {
  const handler = createRequestHandlersFromOpenAPISpec({
    definition: resolve(__dirname, 'api-spec.yml'),
  })
  const server = setupServer(handler)
  const client = axios.create({ baseURL: 'http://localhost:3333' })

  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
  beforeEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('should create mock handlers from OpenAPI spec', async () => {
    const { data } = await client.get('/')

    expect(data).toEqual({
      description: 'Product feedback',
      version: '0.0.1',
    })
  })
})
