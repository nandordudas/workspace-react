import type { Middleware } from 'redux'
import type { MockStoreEnhanced } from 'redux-mock-store'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

export const mockStore = <Store, Actions>(
  initState: Store,
  middlewares: Middleware[] = [thunk],
): MockStoreEnhanced<Store, Actions> => configureStore<Store, Actions>(middlewares)(initState)
