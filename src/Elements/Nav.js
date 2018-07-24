import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '@/Store/Actions'
import styled from 'styled-components'
import { fixed, yellow, black, transition, absolute } from '@/Utilities'
import { Icon } from '@/Elements'

const NavBase = styled.div`
${fixed({})}
  display: flex;
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  z-index: 1000;
  padding: 0 1rem 0 0;
  background-color: #ffffff;
`

const NavItem = styled(Link)`
  padding: 0 0.3rem;
  opacity: 1;
  position: relative;
  padding: 0 1rem;
  line-height: 3rem;
  display: flex;
  text-align: center;
  ${transition({ length: '0.2s' })}
  &:hover {
    opacity: 0.8;
`

const LoginCell = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;  
`
@connect(
  state => ({ user: state.auth }),
  dispatch => logout)
class Nav extends Component {
  handleLogout = () => {
    return logout()
  }

  render () {
    return (
      <NavBase>
        <NavItem to='/'>
          <Icon name="lightning" color={yellow}/>
          Latest
        </NavItem>
        <NavItem to='/submit'>
          Submit
        </NavItem>
        <LoginCell>
          {!this.props.user.loggedIn && (
            <NavItem to='/login'>
            Login
            </NavItem>
          )}
          {this.props.user.loggedIn && (
            <NavItem onClick={ this.handleLogout }>
              Logout
            </NavItem>
          )}
        </LoginCell>
      </NavBase>
    )
  }
}

export default withRouter(Nav)
