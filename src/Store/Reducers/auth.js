import { LOGIN,
  LOGOUT,
  LOAD_DATA_FAILURE,
  RECEIVE_USER_INFO,
  BEGIN_AUTH_LOADING,
  END_AUTH_LOADING,
  ADD_UPVOTE_TO_USER,
  REMOVE_UPVOTE_FROM_USER } from '../Types'

export default function authReducer (state = {
  userInfo: {},
  loggedIn: false,
  loading: false
}, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: true
      }
    case RECEIVE_USER_INFO:
      const userInfo = action.userInfo
      return {
        ...state,
        userInfo
      }
    case LOAD_DATA_FAILURE:
      return {
        loading: false,
        ...state
      }
    case LOGOUT:
      return {
        userInfo: null,
        loggedIn: false
      }
    case BEGIN_AUTH_LOADING:
      return {
        loading: true,
        ...state
      }
    case END_AUTH_LOADING:
      return {
        loading: false,
        ...state
      }
    case ADD_UPVOTE_TO_USER:
      let newUserInfo = Object.assign({}, state.userInfo)
      newUserInfo.upvotes = [...state.userInfo.upvotes, action.id]
      return {
        ...state,
        userInfo: newUserInfo
      }
    case REMOVE_UPVOTE_FROM_USER:
      let reduxdUserInfo = Object.assign({}, state.userInfo)
      reduxdUserInfo.upvotes = reduxdUserInfo.upvotes.filter(item => {
        return item !== action.id
      })
      return {
        ...state,
        userInfo: reduxdUserInfo
      }
    default:
      return state
  }
}
