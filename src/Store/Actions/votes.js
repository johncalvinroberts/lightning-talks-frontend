import {
  ADD_UPVOTE_TO_USER,
  ADD_UPVOTE_TO_POST,
  REMOVE_UPVOTE_FROM_USER,
  REMOVE_UPVOTE_FROM_POST } from '@/Store/Types'

import http from '@/Http'

const addUpvoteToUser = (id) => {
  return { type: ADD_UPVOTE_TO_USER, id }
}

const addUpvoteToPost = (id) => {
  return { type: ADD_UPVOTE_TO_POST, id }
}

const removeUpvoteFromUser = (id) => {
  return { type: REMOVE_UPVOTE_FROM_USER, id }
}

const removeUpvoteFromPost = (id) => {
  return { type: REMOVE_UPVOTE_FROM_POST, id }
}

export const upvotePost = (id) => {
  return async dispatch => {
    dispatch(addUpvoteToUser(id))
    dispatch(addUpvoteToPost(id))
    await http.upvotePostByPostId(id)
  }
}

export const removeUpvotePost = (id) => {
  return async dispatch => {
    dispatch(removeUpvoteFromUser(id))
    dispatch(removeUpvoteFromPost(id))
    await http.removeUpvoteByPostId(id)
  }
}
