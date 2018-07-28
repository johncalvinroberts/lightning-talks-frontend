import { INIT_GLOBAL_ERROR, SHIFT_GLOBAL_ERROR } from '@/Store/Types'

export default function errors (state = {
  errors: []
}, action) {
  switch (action.type) {
    case INIT_GLOBAL_ERROR:
      const pushedErrors = [...state.errors].push(action.error)
      return {
        errors: pushedErrors,
        ...state
      }
    case SHIFT_GLOBAL_ERROR:
      const shiftedErrors = [...state.errors].shift()
      return {
        errors: shiftedErrors,
        ...state
      }
    default:
      return {
        ...state
      }
  }
}
