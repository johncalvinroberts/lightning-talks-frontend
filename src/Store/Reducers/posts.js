import {
  BEGIN_FETCH_POSTS,
  APPEND_POSTS,
  BEGIN_FETCH_POPULAR,
  APPEND_POPULAR,
  BEGIN_FETCH_SINGLE_POST,
  RECEIVE_SINGLE_POST,
  BEGIN_SUBMIT_POST,
  SUBMIT_SUCCESS,
  SUBMIT_FAIL,
  ADD_UPVOTE_TO_POST,
  REMOVE_UPVOTE_FROM_POST } from '../Types'

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
      return { ...state }
    case RECEIVE_SINGLE_POST:
      const incomingPost = action.postDetail
      const post = state.posts.find(post => post && post.slug === incomingPost.slug)
      let posts = []
      if (!post) {
        posts = [...state.posts, incomingPost]
      } else {
        let copyOfPosts = Object.assign([], state.posts)
        posts = copyOfPosts.map(post => {
          return post && post.slug === incomingPost.slug ? incomingPost : post
        })
      }
      return {
        ...state,
        posts }
    case BEGIN_SUBMIT_POST:
      return {
        ...state,
        submitting: true
      }
    case SUBMIT_SUCCESS:
    // reset posts after submitting a post: user will want to see an update list of posts
      return {
        ...state,
        submitting: false,
        posts: [],
        popular: []
      }
    case SUBMIT_FAIL:
      return {
        ...state,
        submitting: false
      }
    case ADD_UPVOTE_TO_POST:
      const newPosts = state.posts.map(post => {
        if (post._id === action.id) {
          post.upvotes = post.upvotes + 1
        }
        return post
      })
      return {
        posts: newPosts,
        ...state
      }
    case REMOVE_UPVOTE_FROM_POST:
      const updatedPosts = state.posts.map(post => {
        if (post._id === action.id) {
          post.upvotes = post.upvotes - 1
        }
      })
      return {
        posts: updatedPosts,
        ...state
      }
    default:
      return { ...state }
  }
}
