import React, { Component } from 'react'
import { Page, Card, VerticalFlex, Icon, Form, SubmitButton } from '@/Elements'
import { blue, yellow, white } from '@/Utilities'
import { Link, withRouter, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { submitLogin, submitRegistration } from '@/Store/Actions'

const LoginHeader = styled.h1`
  color: ${white};
  text-align: center;
`

const LoginSubheader = styled.p`
  color: ${white};
  text-align: center;
`

const FormTitle = styled.h3`
  margin: 0;
`
const LoginCard = styled(Card)`
  display: block;
  margin-bottom: 1rem;
`

const mapDispatchToProps = { submitLogin, submitRegistration }

@connect(state => ({ user: state.auth }), mapDispatchToProps)
@withRouter
export default class Login extends Component {
  state = {
    loginUsername: null,
    loginPassword: null,
    registerUsername: null,
    registerPassword: null,
    redirectToReferrer: false
  }

  handleLogin = async (e) => {
    e.preventDefault()
    const payload = {
      username: this.state.loginUsername,
      password: this.state.loginPassword
    }
    await this.props.submitLogin(payload)
    this.checkForRedirect()
  }

  handleRegister = async (e) => {
    e.preventDefault()
    const payload = {
      username: this.state.loginUsername,
      password: this.state.loginPassword
    }
    this.props.submitRegistration(payload)
  }

  handleFormChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  checkForRedirect = () => {
    if (this.props.user.loggedIn) {
      this.setState({ redirectToReferrer: true })
    }
  }

  componentDidMount = () => {
    this.checkForRedirect()
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    // TODO: validate form inputs here. if value !== null && !validated
    return nextState
  }

  render () {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return <Redirect to={from} />
    }
    return (
      <Page backgroundColor={blue} padding="0 0.3rem 0.3rem 0.3rem">
        <Link to='/'>
          <Icon name="lightning" color={yellow} width="3rem" height="3rem"/>
        </Link>
        <LoginHeader>Lightning Talks</LoginHeader>
        <LoginSubheader>Pitch, preach, pretend</LoginSubheader>
        <VerticalFlex height="auto" justifyContent="center">
          <div>
            <LoginCard>
              <FormTitle>Login</FormTitle>
              <Form action="submit"
                id="login-form"
                onSubmit={ this.handleLogin }
                onChange={ this.handleFormChange }>
                <div>
                  <label htmlFor="name">username: </label>
                  <input type="text"
                    name="name"
                    id="loginUsername"
                    autoComplete="off"
                    required/>
                </div>
                <div>
                  <label htmlFor="name">password: </label>
                  <input type="password"
                    name="password"
                    id="loginPassword"
                    autoComplete="off"
                    required />
                </div>
                <SubmitButton type="submit">submit</SubmitButton>
              </Form>
            </LoginCard>
            <LoginCard>
              <FormTitle>Sign Up</FormTitle>
              <Form action="submit"
                id="register-form"
                onSubmit={this.handleRegister}
                onChange={this.handleFormChange}>
                <div>
                  <label htmlFor="name">username: </label>
                  <input type="text"
                    name="name"
                    id="registerUsername"
                    autoComplete="off"
                    required />
                </div>
                <div>
                  <label htmlFor="name">password: </label>
                  <input type="password"
                    name="password"
                    id="registerPassword"
                    autoComplete="off"
                    required />
                </div>
                <SubmitButton type="submit">submit</SubmitButton>
              </Form>
            </LoginCard>
          </div>
        </VerticalFlex>
      </Page>
    )
  }
}
