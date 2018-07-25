import React, { Component } from 'react'
import { Page, Card, VerticalFlex, Icon, Form, SubmitButton } from '@/Elements'
import { blue, yellow, white } from '@/Utilities'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { submitLogin } from '@/Store/Actions'

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
// const mapDispatchToProps = dispatch => {
//   return { actions: bindActionCreators(submitLogin, dispatch) }
// }

const mapDispatchToProps = { submitLogin }

@connect(state => ({ user: state.auth }), mapDispatchToProps)
export default class Login extends Component {
  state = {
    loginUsername: null,
    loginPassword: null,
    registerUsername: null,
    registerPassword: null,
    validations: {
      username: value => {
        return value.length > 5// TODO: sanitize, regex, etc.
      },
      password: value => {
        return value.length > 8
      }
    },
    formErrors: []
  }

  handleLogin = async (e) => {
    e.preventDefault()
    const payload = {
      username: this.state.loginUsername,
      password: this.state.loginPassword
    }
    this.props.submitLogin(payload)
  }

  handleRegister = async (e) => {
    e.preventDefault()
    console.log(e)
  }

  handleFormChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    // TODO: validate form inputs here. if value !== null && !validated
    return nextState
  }

  render () {
    return (
      <Page backgroundColor={blue} padding="0 0.3rem 0.3rem 0.3rem">
        <Link to='/'>
          <Icon name="lightning" color={yellow} />
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
