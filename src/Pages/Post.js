import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import distanceInWords from 'date-fns/distance_in_words'
import { hydrateSinglePost } from '@/Store/Actions'
import { Page, Nav, VerticalFlex, Card, HorizontalFlex } from '@/Elements'
import { alabaster, elevation, absolute, blue } from '@/Utilities'
import { isThisQuarter } from 'date-fns'

const PostCard = styled(Card)`
  max-width: 750px;
  width: 100%;
  position: relative;
  ${elevation[1]}
  &:hover{
    ${elevation[1]}
  }
`
const PostStats = styled(HorizontalFlex)`
  ${absolute({ x: 'right' })}
  top: 10px;
  right: 10px;
  padding:5px;
  border: solid 1px rgba(0,0,0, 0.1);
  max-width: 200px;
  font-size: 10px;
`
const AuthorLink = styled(Link)`
  color: ${blue};
  margin-left: 3px;
  &:hover{
    font-weight: bold;
  }
`

const mapDispatchToProps = { hydrateSinglePost }
@connect(state => ({ user: state.auth, posts: state.posts.posts }), mapDispatchToProps)
export default class Post extends Component {
  state = {
    post: null
  }

  componentDidMount = () => {
    const { match: { params: { slug } } } = this.props
    this.props.hydrateSinglePost(slug)
  }

  render () {
    const { match: { params: { slug } } } = this.props
    const post = this.props.posts.find(post => {
      return post && post.slug === slug
    })
    const author = post && post._user
    return (
      <Page backgroundColor={alabaster} padding="0">
        <Nav/>
        <VerticalFlex padding="3rem 0">
          <PostCard>
            {
              post && (
                <Fragment>
                  <PostStats>
                    <span>created: {post && distanceInWords(new Date(), new Date(post.dateAdded))} ago</span>
                    <span>submitted by:
                      {author && (
                        <AuthorLink to={'profile/' + author._id}>
                          {author.username}
                        </AuthorLink>
                      )}
                    </span>
                  </PostStats>
                  <h1>{post.title}</h1>
                  <p>{post.content}</p>
                </Fragment>
              )
            }
          </PostCard>
        </VerticalFlex>
      </Page>
    )
  }
}
