import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { App } from './App'
import { store } from './store'

createRoot(document.querySelector('#root')!)
  .render(<Provider store={store} children={createElement(App)} />)
