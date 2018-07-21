import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  state = {
    posts: []
  }

  render () {
    return (
      <Fragment>
        <div>Yooo this is HOME. hehe.</div>
        <Link to="post/something">here baby</Link>
        <Link to="login">Login</Link>
      </Fragment>
    )
  }
}
