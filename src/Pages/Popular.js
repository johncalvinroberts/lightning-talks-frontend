import React, { Component, Fragment } from 'react'
import { Page, PageInner, Nav, List, PostListItem, ScrollButton } from '@/Elements'
import { alabaster } from '@/Utilities'
import { connect } from 'react-redux'
import { getPopularPosts } from '@/Store/Actions'

const mapDispatchToProps = { getPopularPosts }

@connect(
  state => ({ user: state.auth, posts: state.posts.popular }),
  mapDispatchToProps
)
export default class Home extends Component {
  async componentDidMount () {
    if (this.props.posts.length < 1) {
      this.props.getPopularPosts()
    }
  }

  render () {
    return (
      <Fragment>
        <Page backgroundColor={alabaster}
          padding="1rem 0.3rem 1rem 0.3rem">
          <Nav />
          <PageInner>
            <List>
              {
                this.props.posts.map((post, index) => <PostListItem post={post} key={index} rank={index + 1} />)
              }
            </List>
            <ScrollButton onClick={this.props.getPopularPosts}>Load more posts</ScrollButton>
          </PageInner>
        </Page>
      </Fragment>
    )
  }
}
