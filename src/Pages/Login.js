import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  state = {}

  render () {
    return (
      <Fragment>
        <div>Yooo this is login. Fuuu.</div>
        <Link to="post">here baby</Link>
      </Fragment>
    )
  }
}
