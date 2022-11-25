import type { Either } from 'types'

export const tryCatch = async <T extends Either<Error, Record<string, any>>>(
  promise: () => Promise<T['data']>,
) => {
  const result = {
    data: null,
    error: null,
  } as T

  try {
    const data = await promise()

    result.data = data
  }
  catch (error) {
    console.error(error)

    result.error = error instanceof Error ? error : new Error(`${error}`)
  }

  return result
}
