const GET = 'GET'
const POST = 'POST'
const PUT = 'PUT'
const DELETE = 'DELETE'

export default class Http {
  constructor (token) {
    this.token = token
    this.defaultHeader = { 'Content-Type': 'application/json' }
    this.baseUrl = 'localhost:3005'
  }
  fetch (url, data = {}, method = GET) {
    const options = {
      headers: new Headers({
        ...this.defaultHeader,
        Authorization: `Bearer ${this.token}`
      }),
      method: method,
      credentials: 'include'
    }
    return fetch(this.baseUrl + url, options)
      .then(async (response) => {
        const data = await response.json()
        return data
      })
      .catch(error => console.log(error) || error)
  }
  // user requests
  submitRegistration (data) {
    return this.fetch('/auth/register', data, POST)
  }

  submitLogin (data) {
    return this.fetch('/auth/login', data, POST)
  }

  getProfile () {
    return this.fetch('/auth/profile', {}, GET)
  }

  // posts requests
  getPosts ({ page }) {
    return this.fetch(`/posts?page=${page}`, {}, GET)
  }

  getPostBySlug ({ slug }) {
    return this.fetch(`/posts/${slug}`, {}, GET)
  }

  createPost (data) {
    return this.fetch(`/posts`, data, POST)
  }

  // votes requests
  upvotePostBySlug (slug) {
    return this.fetch(`/api/posts/${slug}/upvote`, {}, POST)
  }
  removeUpvoteBySlog (slug) {
    return this.fetch(`/api/posts/${slug}/upvote`, {}, DELETE)
  }
}
