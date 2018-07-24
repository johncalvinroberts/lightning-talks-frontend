import React, { Component, Fragment } from 'react'
import { VerticalFlex } from '@/Elements'
import { connect } from 'react-redux'
import Nav from '@/Elements/Nav'

@connect(
  state => ({ user: state.auth, posts: state.posts })
)
export default class Home extends Component {
  componentDidMount () {
    console.log('yoooiu get posts')
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log(nextState)
  }

  render () {
    return (
      <Fragment>
        <Nav/>
        <VerticalFlex padding="3rem 10px 10px 10px">
          <div>
            yooo..dang
          </div>
        </VerticalFlex>
      </Fragment>
    )
  }
}
