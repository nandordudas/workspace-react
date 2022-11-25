import type { Action, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

import { reducer } from './reducer'

export const store = configureStore({ reducer })

export type RootDispatch = ThunkDispatch<RootState, any, RootActions>

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof reducer>

export type RootActions = Parameters<typeof reducer>[1]

export interface RootThunkConfig {
  state: RootState
  dispatch: RootDispatch
  extra: any
}

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
