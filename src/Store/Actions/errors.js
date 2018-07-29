import { PUSH_GLOBAL_ERROR, SHIFT_GLOBAL_ERROR } from '@/Store/Types'

export const pushGlobalError = (error) => {
  return { type: PUSH_GLOBAL_ERROR, error }
}

export const shiftGlobalError = () => {
  return { type: SHIFT_GLOBAL_ERROR }
}
