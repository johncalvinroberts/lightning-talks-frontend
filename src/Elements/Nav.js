import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '@/Store/Actions'
import styled from 'styled-components'
import { fixed, yellow, alabaster, blue, transition } from '@/Utilities'
import { Icon } from '@/Elements'

const NavBase = styled.div`
${fixed({})}
  display: flex;
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  z-index: 1000;
  padding: 0 0.3rem;
  background-color: ${blue};
`

const NavItem = styled(Link)`
  opacity: 1;
  position: relative;
  line-height: 3rem;
  display: flex;
  text-align: center;
  align-items: center;
  color: ${alabaster};
  ${transition({ length: '0.2s' })}
  &:hover {
    opacity: 0.8;
  }
`
const NavSeperator = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin: 0 1rem;
  background-color: ${alabaster};
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
          <NavSeperator/>
        </NavItem>
        <NavItem to='/submit'>
          Submit
          <NavSeperator />
        </NavItem>
        <LoginCell>
          {!this.props.user.loggedIn && (
            <NavItem to='/login'>
            Login
              <NavSeperator />
            </NavItem>
          )}
          {this.props.user.loggedIn && (
            <NavItem onClick={ this.handleLogout }>
              Logout
              <NavSeperator />
            </NavItem>
          )}
        </LoginCell>
      </NavBase>
    )
  }
}

export default withRouter(Nav)
