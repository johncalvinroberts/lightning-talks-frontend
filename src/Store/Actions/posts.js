import http from '@/Http'
import store from '@/Store/index'
import {
  BEGIN_FETCH_POSTS,
  APPEND_POSTS,
  BEGIN_FETCH_SINGLE_POST,
  RECEIVE_SINGLE_POST,
  BEGIN_FETCH_POPULAR,
  APPEND_POPULAR,
  BEGIN_SUBMIT_POST,
  SUBMIT_SUCCESS,
  SUBMIT_FAIL,
  INIT_GLOBAL_ERROR } from '../Types'

const beginFetch = () => {
  return { type: BEGIN_FETCH_POSTS }
}

const appendPosts = (posts) => {
  return { type: APPEND_POSTS, posts }
}

const beginFetchSinglePost = (slug) => {
  return { type: BEGIN_FETCH_SINGLE_POST, slug }
}

const receiveSinglePost = (postDetail) => {
  return { type: RECEIVE_SINGLE_POST, postDetail }
}

export const hydrateSinglePost = (slug) => {
  return async dispatch => {
    // first check if full version of post is already in posts
    const { posts: { posts } } = store.getState()
    const existingPost = posts.find(post => post && post.slug === slug)
    // check if it's a full post by seeing if it has namespace `content` on the post object
    if (!existingPost || !existingPost.content) {
      try {
        dispatch(beginFetchSinglePost())
        const postDetail = await http.getPostBySlug(slug)
        dispatch(receiveSinglePost(postDetail))
      } catch (error) {
        dispatch({ type: INIT_GLOBAL_ERROR, error })
      }
    }
  }
}

export const getPosts = () => {
  return async dispatch => {
    try {
      dispatch(beginFetch())
      const { posts } = await http.getPosts()
      dispatch(appendPosts(posts))
    } catch (error) {
      dispatch({ type: INIT_GLOBAL_ERROR, error })
    }
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
    try {
      dispatch(beginFetchPopular())
      const { posts } = await http.getPopularPosts()
      dispatch(appendPopular(posts))
    } catch (error) {
      dispatch({ type: INIT_GLOBAL_ERROR, error })
    }
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
      dispatch(getPosts())
    } catch (error) {
      dispatch(submitFail())
      dispatch({ type: INIT_GLOBAL_ERROR, error })
    }
  }
}
