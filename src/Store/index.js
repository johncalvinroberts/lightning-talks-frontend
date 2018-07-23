import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Reducers'

export default function configStore () {
  const store = createStore(rootReducer, applyMiddleware(thunk))
  return store
}
