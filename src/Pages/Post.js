import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import distanceInWords from 'date-fns/distance_in_words'
import { hydrateSinglePost } from '@/Store/Actions'
import { Page, Nav, VerticalFlex, Card, HorizontalFlex, Icon } from '@/Elements'
import { alabaster, elevation, absolute, transition, blue, white } from '@/Utilities'

const PostCard = styled(Card)`
  max-width: 750px;
  width: 100%;
  position: relative;
  padding-top: 3rem;
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
const IconBox = styled.button`
  ${transition({ length: '0.2s' })}
  ${absolute({})}
  top: 10px;
  left: 10px;
  width: 2.5rem;
  height: 2.5rem;
  background-color: transparent;
  border: solid 2px ${blue};
  &:hover {
    background-color: ${blue};
  }
  &:focus {
    outline: 0 none;
    border-color: ${blue};
  }
}
`

const mapStateToProps = state => {
  return ({
    user: state.auth,
    posts: state.posts.posts,
    upvotes: state.auth.userInfo && state.auth.userInfo.upvotes
  })
}

const mapDispatchToProps = { hydrateSinglePost }
@connect(mapStateToProps, mapDispatchToProps)
export default class Post extends Component {
  state = {
    iconHovering: false
  }
  componentDidMount = () => {
    const { match: { params: { slug } } } = this.props
    this.props.hydrateSinglePost(slug)
  }

  handleUpvote = (e) => {
    console.log('handle vote toggle')
  }

  toggleHover = () => {
    this.setState({
      iconHovering: !this.state.iconHovering
    })
  }

  render () {
    const { match: { params: { slug } } } = this.props
    const post = this.props.posts.find(post => {
      return post && post.slug === slug
    })
    const author = post && post._user
    const liked = this.props.upvotes && post && this.props.upvotes.includes(post.slug)
    const iconColor = this.state.iconHovering ? white : blue
    const iconDimension = this.state.iconHovering ? '18px' : '16px'
    return (
      <Page backgroundColor={alabaster} padding="0">
        <Nav/>
        <VerticalFlex padding="3rem 0">
          <PostCard>
            <IconBox onMouseEnter={this.toggleHover}
              onMouseLeave={this.toggleHover}>
              <Icon name="upvote"
                width={iconDimension}
                height={iconDimension}
                style={{ cursor: 'pointer' }}
                onClick={this.handleUpvote}
                color={iconColor}/>
            </IconBox>
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
