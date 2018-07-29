import store from '@/Store/index'
const GET = 'GET'
const POST = 'POST'
const PUT = 'PUT' // eslint-disable-line
const DELETE = 'DELETE'

class Http {
  constructor () {
    this.defaultHeader = { 'Content-Type': 'application/json' }
    // this.baseUrl =  'http://localhost:3005'
    // const prod = process.env.NODE_ENV === 'production' // <-- will get transpiled in build
    this.baseUrl = 'https://lightning-talks-backend-mjkbxlaidz.now.sh'
  }

  setToken (token) {
    this.token = token
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
    if (method !== GET) {
      options.body = JSON.stringify(data)
    }
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(this.baseUrl + url, options)
        const data = await response.json()
        if (!response.ok) {
          throw new Error(data.message)
        } else {
          resolve(data)
        }
      } catch (error) {
        reject(error)
      }
    })
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
  getPosts () {
    const { posts: { page } } = store.getState()
    return this.fetch(`/api/posts?page=${page}`, {}, GET)
  }
  getPostBySlug (slug) {
    return this.fetch(`/api/posts/${slug}`, {}, GET)
  }
  createPost (data) {
    return this.fetch(`/api/posts`, data, POST)
  }
  getPopularPosts () {
    const { posts: { popularPage } } = store.getState()
    return this.fetch(`/api/posts?sort=upvotes&page=${popularPage}`, {}, GET)
  }

  // votes requests
  upvotePostByPostId (id) {
    return this.fetch(`/api/posts/${id}/upvote`, {}, POST)
  }
  removeUpvoteByPostId (id) {
    return this.fetch(`/api/posts/${id}/upvote`, {}, DELETE)
  }

  // user profile requests
  fetchUserProfile (id) {
    return this.fetch(`/api/users/${id}`)
  }
}
export default new Http()
