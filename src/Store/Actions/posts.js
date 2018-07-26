import http from '@/Http'
import {
  BEGIN_FETCH_POSTS,
  APPEND_POSTS,
  BEGIN_FETCH_SINGLE_POST,
  RECEIVE_SINGLE_POST,
  BEGIN_FETCH_POPULAR,
  APPEND_POPULAR,
  BEGIN_SUBMIT_POST,
  SUBMIT_SUCCESS,
  SUBMIT_FAIL } from '../Types'

const beginFetch = () => {
  return { type: BEGIN_FETCH_POSTS }
}

const appendPosts = (posts) => {
  return { type: APPEND_POSTS, posts }
}

const beginFetchSinglePost = (slug) => {
  return { type: BEGIN_FETCH_SINGLE_POST, slug }
}

const receiveSinglePost = (slug) => {
  return { type: RECEIVE_SINGLE_POST, slug }
}

export const getSinglePost = (slug) => {
  return async dispatch => {
    dispatch(beginFetchSinglePost())
    const postDetail = await http.getPostBySlug(slug)
    dispatch(receiveSinglePost(postDetail))
  }
}

export const getPosts = () => {
  return async dispatch => {
    dispatch(beginFetch())
    const { posts } = await http.getPosts()
    dispatch(appendPosts(posts))
  }
}
// popular posts

const beginFetchPopular = () => {
  return { type: BEGIN_FETCH_POPULAR }
}

const appendPopular = (posts) => {
  return { type: APPEND_POPULAR, posts }
}

export const getPopularPosts = () => {
  return async dispatch => {
    dispatch(beginFetchPopular())
    const { posts } = await http.getPopularPosts()
    dispatch(appendPopular(posts))
  }
}

// post submission
const beginSubmit = () => {
  return { type: BEGIN_SUBMIT_POST }
}

const submitSuccess = () => {
  return { type: SUBMIT_SUCCESS }
}

const submitFail = () => {
  return { type: SUBMIT_FAIL }
}

export const submitPost = (payload) => {
  return async dispatch => {
    dispatch(beginSubmit())
    try {
      await http.createPost({ post: payload })
      dispatch(submitSuccess())
    } catch (error) {
      dispatch(submitFail())
    }
  }
}
