import React, { Component } from 'react'
import { Page, Card, VerticalFlex, Icon, Form, FormTitle, SubmitButton } from '@/Elements'
import { blue, yellow, white } from '@/Utilities'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { submitLogin, submitRegistration } from '@/Store/Actions'

const LoginHeader = styled.h1`
  color: ${white};
  text-align: center;
  height: 2rem;
`

const LoginSubheader = styled.p`
  color: ${white};
  text-align: center;
  height: 1rem;
`
const LoginCard = styled(Card)`
  display: block;
  margin-bottom: 1rem;
`

const mapDispatchToProps = { submitLogin, submitRegistration }

@connect(state => ({ user: state.auth }), mapDispatchToProps)
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
      username: this.state.registerUsername,
      password: this.state.registerPassword
    }
    this.props.submitRegistration(payload)
    this.checkForRedirect()
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
        <VerticalFlex minHeight="75vh" justifyContent="center">
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
                <SubmitButton type="submit">Log in</SubmitButton>
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
                <SubmitButton type="submit">create account</SubmitButton>
              </Form>
            </LoginCard>
          </div>
        </VerticalFlex>
      </Page>
    )
  }
}
