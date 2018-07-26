import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Reducers'

function configStore () {
  const store = createStore(rootReducer, applyMiddleware(thunk))
  return store
}
export default configStore()
