import { BEGIN_FETCH_USER, APPEND_USER } from '@/Store/Types'

export default function users (state = {
  users: [],
  loading: false
}, action) {
  switch (action.type) {
    case BEGIN_FETCH_USER:
      return {
        ...state,
        loading: true
      }
    case APPEND_USER:
      const users = [...state.users, action.payload]
      return {
        users,
        loading: false
      }
    default:
      return { ...state }
  }
}
