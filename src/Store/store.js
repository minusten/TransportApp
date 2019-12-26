import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers from '../Reducers'

export default function configureStore () {
  const middlewares = [thunkMiddleware]
  const middleWareEnhancer = applyMiddleware(...middlewares)

  const store = createStore(
    reducers
  )

  return store
}
