import React, { Component } from 'react'
import ListItem from './ListItem'
import styled from 'styled-components'
import { Icon } from '@/Elements'
import { blue, white } from '@/Utilities'

const PostListItemParent = styled(ListItem)`
  position: relative;
  z-index:99999;
`
const FlexItem = styled.div`
  flex: 1;
  padding-left: 25px;
`
const RaisedIcon = styled(Icon)`
  z-index: 1000;
`

export default class PostListItem extends Component {
  state = { iconHovering: false }

  toggleHover = () => {
    this.setState({
      iconHovering: !this.state.iconHovering
    })
  }

  render () {
    const iconColor = this.state.iconHovering ? white : blue
    return (
      <PostListItemParent href={'post/' + this.props.post.slug}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}>
        <RaisedIcon name="upvote" color={iconColor} width="14px" height="14px"/>
        <FlexItem>
          {this.props.post.title}
        </FlexItem>
      </PostListItemParent>
    )
  }
}
