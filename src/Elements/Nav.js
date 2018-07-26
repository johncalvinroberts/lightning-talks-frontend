import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '@/Store/Actions'
import styled from 'styled-components'
import { fixed, yellow, alabaster, lightGrey, blue, white, transition } from '@/Utilities'
import { Icon } from '@/Elements'

const NavBase = styled.div`
  ${fixed({})}
  display: flex;
  width: 100%;
  height: 3rem;
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
  color: ${white};
  ${transition({ length: '0.2s' })}
  &:hover {
    color: ${lightGrey};
  }
`
const NavSeperator = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin: 0 1rem;
  background-color: ${white};
`

const LoginCell = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;  
`

@connect(
  state => ({ user: state.auth }),
  dispatch => logout)
@withRouter
export default class Nav extends Component {
  handleLogout = () => {
    return logout()
  }

  render () {
    return (
      <NavBase>
        <NavItem to='/'>
          <Icon name="lightning" color={yellow} width="3rem" height="3rem"/>
          Latest
          <NavSeperator/>
        </NavItem>
        <NavItem to="/popular">
          Popular
          <NavSeperator />
        </NavItem>
        <NavItem to='/submit'>
          Submit
        </NavItem>
        <LoginCell>
          {!this.props.user.loggedIn && (
            <NavItem to='/login'>
              Login <Icon name="login" color={alabaster}/>
            </NavItem>
          )}
          {this.props.user.loggedIn && (
            <NavItem onClick={ this.handleLogout } to='/profile'>
              account <Icon name="account" color={alabaster} />
            </NavItem>
          )}
        </LoginCell>
      </NavBase>
    )
  }
}
