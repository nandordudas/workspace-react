import { rest } from 'msw'
import type { Options } from 'openapi-backend'
import { OpenAPIBackend } from 'openapi-backend'

export function createRequestHandlersFromOpenAPISpec(options: Options) {
  const api = new OpenAPIBackend({
    ...options,
    handlers: {
      notFound: (_, res, ctx) => res(ctx.status(404)),
      validationFail: ({ validation }, res, ctx) => res(
        ctx.status(400),
        ctx.json({ error: validation.errors }),
      ),
    },
  })

  api.register('notImplemented', ({ operation }, res, ctx) => {
    const { status, mock } = api.mockResponseForOperation(operation.operationId!)

    return res(ctx.status(status), ctx.json(mock))
  })

  api.init()

  return rest.all(
    /.*/,
    async ({ bodyUsed, headers, json, method, url }, res, ctx) => {
      return api.handleRequest({
        path: url.pathname,
        query: url.search,
        method,
        body: bodyUsed ? await json() : null,
        headers: {
          ...headers.raw,
        },
      }, res, ctx)
    },
  )
}
