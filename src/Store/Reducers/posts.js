import {
  BEGIN_FETCH_POSTS,
  APPEND_POSTS,
  BEGIN_FETCH_POPULAR,
  APPEND_POPULAR,
  BEGIN_FETCH_SINGLE_POST,
  RECEIVE_SINGLE_POST,
  BEGIN_SUBMIT_POST,
  SUBMIT_SUCCESS,
  SUBMIT_FAIL } from '../Types'

export default function posts (state = {
  loading: true,
  page: 1,
  posts: [],
  popularLoading: false,
  popularPage: 1,
  popular: [],
  submitting: false
}, action) {
  switch (action.type) {
    case BEGIN_FETCH_POSTS:
      return {
        ...state,
        loading: true
      }
    case APPEND_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...action.posts],
        page: state.page + 1,
        loading: false
      }
    case BEGIN_FETCH_POPULAR:
      return {
        ...state,
        popularLoading: true
      }
    case APPEND_POPULAR:
      return {
        ...state,
        popularLoading: false,
        popularPage: state.popularPage + 1,
        popular: [...state.popular, ...action.posts]
      }
    case BEGIN_FETCH_SINGLE_POST:
    case RECEIVE_SINGLE_POST:
    // TODO: append post detail to item in posts state here
      return { ...state }
    case BEGIN_SUBMIT_POST:
      return {
        ...state,
        submitting: true
      }
    case SUBMIT_SUCCESS:
      return {
        ...state,
        submitting: false,
        posts: []
      }
    case SUBMIT_FAIL:
      return {
        ...state,
        submitting: false
      }
    default:
      return { ...state }
  }
}
