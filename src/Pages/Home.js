import React, { Component, Fragment } from 'react'
import { Page, PageInner, Nav, List, PostListItem, ScrollButton } from '@/Elements'
import { alabaster } from '@/Utilities'
import { connect } from 'react-redux'
import { getPosts } from '@/Store/Actions'

const mapDispatchToProps = { getPosts }

@connect(
  state => ({ user: state.auth, posts: state.posts }),
  mapDispatchToProps
)
export default class Home extends Component {
  async componentDidMount () {
    if (this.props.posts.posts.length < 1) {
      this.props.getPosts()
    }
  }

  render () {
    return (
      <Fragment>
        <Page backgroundColor={alabaster}
          padding="1rem 0.3rem 1rem 0.3rem">
          <Nav/>
          <PageInner>
            <List>
              {
                this.props.posts.posts.map((post, index) => <PostListItem post={post} key={index} rank={index + 1}/>)
              }
            </List>
            <ScrollButton onClick={this.props.getPosts}>Load more posts</ScrollButton>
          </PageInner>
        </Page>
      </Fragment>
    )
  }
}
