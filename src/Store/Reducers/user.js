import { LOGIN, REGISTER, FETCH_PROFILE, LOGOUT, LOAD_DATA_FAILURE, RECEIVE_USER_INFO } from '../Types'

export default function userReducer (state = {
  userInfo: {},
  loggedIn: false
}, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: true
      }
    case REGISTER:
    case FETCH_PROFILE:
    case RECEIVE_USER_INFO:
      const userInfo = action.userInfo
      return {
        ...state,
        userInfo
      }
    case LOAD_DATA_FAILURE:
    case LOGOUT:
      return {
        userInfo: null,
        loggedIn: false
      }
    default:
      return state
  }
}
