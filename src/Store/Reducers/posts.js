import {
  BEGIN_FETCH_POSTS,
  APPEND_POSTS,
  BEGIN_FETCH_SINGLE_POST,
  RECEIVE_SINGLE_POST,
  BEGIN_SUBMIT_POST,
  SUBMIT_SUCCESS,
  SUBMIT_FAIL } from '../Types'

export default function posts (state = {
  loading: true,
  page: 1,
  posts: [],
  submitting: false
}, action) {
  switch (action.type) {
    case BEGIN_FETCH_POSTS:
      return {
        loading: true,
        ...state
      }
    case APPEND_POSTS:
      return {
        posts: [...state.posts, ...action.posts],
        page: state.page + 1,
        loading: false
      }
    case BEGIN_FETCH_SINGLE_POST:
    case RECEIVE_SINGLE_POST:
    // TODO: append post detail to item in posts state here
      return { ...state }
    case BEGIN_SUBMIT_POST:
      return {
        submitting: true,
        ...state
      }
    case SUBMIT_SUCCESS:
      return {
        submitting: false,
        posts: [],
        ...state
      }
    case SUBMIT_FAIL:
      return {
        submitting: false,
        ...state
      }
    default:
      return { ...state }
  }
}
