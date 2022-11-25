export type Nullable<T> = T | null

export interface Either<L, R> {
  data: R | null
  error: L | null
}

