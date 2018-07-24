import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class Registration extends Component {
  state = {}

  render () {
    return (
      <Fragment>
        <div>Yooo this is registartion</div>
        <Link to="post/somethging">here baby</Link>
      </Fragment>
    )
  }
}
