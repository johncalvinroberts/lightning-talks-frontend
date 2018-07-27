import { BEGIN_FETCH_USER, APPEND_USER } from '@/Store/Types'
import store from '@/Store/index'

import http from '@/Http'

const beginFetchUser = () => {
  return { type: BEGIN_FETCH_USER }
}

const appendUser = (payload) => {
  return { type: APPEND_USER, payload }
}

export const fetchUserProfile = (id) => {
  return async dispatch => {
    const { users: { users } } = store.getState()
    const existingUser = users.find(user => user._id === id)
    if (!existingUser) {
      dispatch(beginFetchUser())
      const payload = await http.fetchUserProfile(id)
      dispatch(appendUser(payload))
    }
  }
}
