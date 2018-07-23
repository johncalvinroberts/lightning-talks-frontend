import http from '@/http'
import { LOGIN, REGISTER, LOGOUT, LOAD_DATA_FAILURE, RECEIVE_USER_INFO } from '../Types'

// registerUser: for handling initial load of user
export const registerUser = (token) => {
  return dispatch => {
    if (token) {
      dispatch(fetchProfile())
      dispatch(login())
    }
  }
}

export const receiveUserInfo = (userInfo) => {
  return { type: RECEIVE_USER_INFO, userInfo }
}

export const login = () => {
  return { type: LOGIN }
}

export const fetchProfile = () => {
  return async dispatch => {
    try {
      const userInfo = await http.getProfile()
      dispatch(receiveUserInfo(userInfo))
    } catch (error) {
      dispatch({ type: LOAD_DATA_FAILURE })
    }
  }
}
