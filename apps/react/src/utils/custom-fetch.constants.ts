export type Options = Parameters<typeof fetch>[1]

export const defaultHeaderOptions: Options = {
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
}
