import type { Either } from '../types'
import type { Options } from './custom-fetch.constants'
import { defaultHeaderOptions } from './custom-fetch.constants'
import { tryCatch } from './try-catch'

export const fetchJSON = async <T extends Record<string, any>, Result extends Either<Error, T> = Either<Error, T>>(
  url: string,
  options?: Options,
): Promise<Result> => {
  const { data, error } = await tryCatch<Either<Error, T>>(async () => {
    const response = await fetch(url, { ...defaultHeaderOptions, ...options })
    const data = await response.json()

    return data
  })

  return { data, error } as Result
}
