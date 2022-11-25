import '@testing-library/jest-dom'
import 'whatwg-fetch'

import { createRequestHandlersFromOpenAPISpec } from '@rumpup-todo/openapi-backend'
import { cleanup } from '@testing-library/react'
import { setupServer } from 'msw/node'
import { afterEach } from 'vitest'

const handler = createRequestHandlersFromOpenAPISpec({
  definition: './node_modules/@rumpup-todo/openapi-backend/api-spec.yml',
})

const server = setupServer(handler)

afterEach(() => cleanup())
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
beforeEach(() => server.resetHandlers())
afterAll(() => server.close())
