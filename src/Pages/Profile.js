import React, { Component } from 'react'
import styled from 'styled-components'
import { Page, PageInner, Nav, VerticalFlex, Card, Icon, List, PostListItem } from '@/Elements'
import { alabaster, white, elevation } from '@/Utilities'
import formatRelative from 'date-fns/formatRelative'
import { connect } from 'react-redux'
import { fetchUserProfile } from '@/Store/Actions'
import { format } from 'util'

const ProfileCard = styled.div`
  padding: 1rem;
  ${elevation[1]}
  background-color: ${white};
  margin-bottom: 20px;
  &:hover{
    ${elevation[1]}
  }
  span {
    font-weight: 600;
  }
`
const mapDispatchToProps = { fetchUserProfile }

const mapStateToProps = state => {
  return { users: state.users.users }
}

@connect(mapStateToProps, mapDispatchToProps)
class Profile extends Component {
  state = {
    id: null
  }

  componentDidMount = () => {
    const { match: { params: { id } } } = this.props
    this.setState({ id })
    this.props.fetchUserProfile(id)
  }

  render () {
    const user = this.props.users.find(user => user._id === this.state.id)

    return (
      <Page backgroundColor={alabaster} padding="0.3rem">
        <Nav/>
        <PageInner>
          <ProfileCard>
            <p><span>user: </span> {user && user.username}</p>
            <p><span>member since: </span>{user && formatRelative(new Date(user.dateAdded), new Date())}</p>
          </ProfileCard>
          <List>
            {
              user && user.posts.map((post, index) => <PostListItem post={post} key={index} rank={index + 1} />)
            }
          </List>
        </PageInner>
      </Page>
    )
  }
}

export default Profile
