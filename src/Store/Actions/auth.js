import http from '@/Http'
import { LOGIN,
  LOGOUT,
  LOAD_DATA_FAILURE,
  RECEIVE_USER_INFO,
  BEGIN_AUTH_LOADING,
  END_AUTH_LOADING } from '../Types'

// auth loading, can use on both registration and login pages
const beginAuthLoading = () => {
  return { type: BEGIN_AUTH_LOADING }
}
const endAuthLoading = () => {
  return { type: END_AUTH_LOADING }
}

const receiveUserInfo = (userInfo) => {
  return { type: RECEIVE_USER_INFO, userInfo }
}

const login = () => {
  return { type: LOGIN }
}

// registerUser: for handling initial load of user. for returning users
export const registerUser = (token) => {
  return dispatch => {
    if (token) {
      dispatch(fetchProfile())
      dispatch(login())
    }
  }
}

export const fetchProfile = () => {
  return async dispatch => {
    try {
      dispatch(beginAuthLoading())
      const userInfo = await http.getProfile()
      dispatch(endAuthLoading())
      dispatch(receiveUserInfo(userInfo))
    } catch (error) {
      dispatch({ type: LOAD_DATA_FAILURE })
    }
  }
}
// login
export const submitLogin = ({ username, password }) => {
  return async dispatch => {
    try {
      dispatch(beginAuthLoading())
      await http.submitLogin({ username, password })
      dispatch(endAuthLoading())
      dispatch(login())
    } catch (error) {
      dispatch({ type: LOAD_DATA_FAILURE })
    }
  }
}

// registration
export const submitRegistration = ({ username, password }) => {
  return async dispatch => {
    try {
      dispatch(beginAuthLoading())
      await http.submitRegistration({ username, password })
      dispatch(endAuthLoading())
    } catch (error) {
      dispatch({ type: LOAD_DATA_FAILURE })
    }
  }
}

// logout
export const logout = () => {
  return { type: LOGOUT }
}
