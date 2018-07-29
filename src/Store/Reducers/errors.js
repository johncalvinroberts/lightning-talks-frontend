import { PUSH_GLOBAL_ERROR, SHIFT_GLOBAL_ERROR } from '@/Store/Types'

export default function errors (state = {
  errors: []
}, action) {
  switch (action.type) {
    case PUSH_GLOBAL_ERROR:
      const pushedErrors = [...state.errors, action.error]
      console.log(pushedErrors)
      return {
        errors: pushedErrors
      }
    case SHIFT_GLOBAL_ERROR:
      const shiftedErrors = [...state.errors].shift()
      return {
        errors: shiftedErrors
      }
    default:
      return {
        ...state
      }
  }
}
