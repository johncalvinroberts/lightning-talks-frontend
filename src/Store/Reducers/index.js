import { combineReducers } from 'redux'
import auth from './auth'
import posts from './posts'
import users from './users'
import errors from './errors'

export default combineReducers({
  auth,
  posts,
  users,
  errors
})
