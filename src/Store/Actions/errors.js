import { INIT_GLOBAL_ERROR, SHIFT_GLOBAL_ERROR } from '@/Store/Types'

export const initGlobalError = (error) => {
  return { type: INIT_GLOBAL_ERROR, error }
}

export const shiftGlobalError = () => {
  return { type: SHIFT_GLOBAL_ERROR }
}
