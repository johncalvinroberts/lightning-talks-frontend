import React, { Component } from 'react'
import { Page, Card, VerticalFlex, Icon, Form, SubmitButton } from '@/Elements'
import { blue, yellow, white } from '@/Utilities'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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

export default class Login extends Component {
  handleLogin = async (e) => {
    e.preventDefault()
    console.log(e)
  }

  handleRegister = async (e) => {
    e.preventDefault()
    console.log(e)
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
              <Form action="submit" id="login-form" onSubmit={ this.handleLogin }>
                <div>
                  <label htmlFor="name">username: </label>
                  <input type="text" name="name" id="username" required/>
                </div>
                <div>
                  <label htmlFor="name">password: </label>
                  <input type="password" name="password" id="password" required />
                </div>
                <SubmitButton type="submit">submit</SubmitButton>
              </Form>
            </LoginCard>
            <LoginCard>
              <FormTitle>Sign Up</FormTitle>
              <Form action="submit" id="register-form" onSubmit={ this.handleRegister }>
                <div>
                  <label htmlFor="name">username: </label>
                  <input type="text" name="name" id="registerusername" required />
                </div>
                <div>
                  <label htmlFor="name">password: </label>
                  <input type="password" name="password" id="registerpassword" required />
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
