import React, { Component } from 'react'
import ListItem from './ListItem'
import styled from 'styled-components'
import { Icon } from '@/Elements'
import { blue, white, yellow, black, transition, textOverflow } from '@/Utilities'
import distanceInWords from 'date-fns/distance_in_words'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { upvotePost, removeUpvotePost } from '@/Store/Actions'

const PostListItemParent = styled(ListItem)`
  position: relative;
  z-index:99999;
`
const PostTitle = styled(Link)`
  flex: 1;
  padding-left: 25px;
  color: ${black};
`
const PostStats = styled.div`
  font-size: 10px;
  color: ${black};
  ${transition({ length: '0.1s' })}
  opacity: 0.7;
  position: absolute;
  bottom: -12px;
  left: 33px;
  display: flex;
  justify-content: space-between;
  &hover{
    opacity: 1;
  }
  span {
    margin: 0 10px;
    @media (max-width: 700px) {
      margin: 0 6px;
      ${textOverflow}
      max-width: 135px;
      &:last-child {
        max-width: 100px;
      }
    }    
  }
`

const Rank = styled.span`
  margin-right: 5px;
  font-size: 12px;
`
const AuthorLink = styled(Link)`
  color: ${blue};
  margin-left: 3px;
  &:hover{
    font-weight: bold;
  }
`
const mapDispatchToProps = { upvotePost, removeUpvotePost }

@connect(state => ({ upvotes: state.auth.userInfo && state.auth.userInfo.upvotes }), mapDispatchToProps)
export default class PostListItem extends Component {
  state = { iconHovering: false, liked: false }

  toggleHover = () => {
    this.setState({
      iconHovering: !this.state.iconHovering
    })
  }

  handleUpvote = (e) => {
    const liked = this.props.upvotes.includes(this.props.post._id)
    if (!liked) {
      this.props.upvotePost(this.props.post._id)
    } else {
      this.props.removeUpvotePost(this.props.post._id)
    }
  }

  render () {
    const iconColor = this.state.liked ? yellow : this.state.iconHovering ? white : blue
    const iconDimension = this.state.iconHovering ? '16px' : '14px'
    const author = this.props.post._user
    const liked = this.props.upvotes && this.props.upvotes.includes(this.props.post._id)
    console.log(liked)
    return (
      <PostListItemParent
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}>
        <Icon name="upvote" color={iconColor}
          width={iconDimension}
          height={iconDimension}
          style={{ cursor: 'pointer' }}
          onClick={this.handleUpvote}
        />
        <PostTitle to={'post/' + this.props.post.slug}>
          <Rank>
            {this.props.rank}.
          </Rank>
          {this.props.post.title}
        </PostTitle>
        <PostStats>
          <span>upvotes: {this.props.post.upvotes}</span>
          <span>created: {distanceInWords(new Date(), new Date(this.props.post.dateAdded))} ago</span>
          <span>submitted by:
            <AuthorLink to={'profile/' + author._id}>
              {author.username}
            </AuthorLink>
          </span>

        </PostStats>
      </PostListItemParent>
    )
  }
}
