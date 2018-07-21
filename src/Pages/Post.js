import React, { Component } from 'react'

export default class Post extends Component {
  state = {}

  render () {
    const { match: { params: { slug } } } = this.props
    console.log(slug)
    return (
      <div>Yooo this is the pst detail page. hehe.</div>
    )
  }
}
