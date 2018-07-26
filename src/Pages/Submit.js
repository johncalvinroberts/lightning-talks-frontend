import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { submitPost } from '@/Store/Actions'
import { Form, FormTitle, VerticalFlex, Nav, Page, SubmitButton, Card } from '@/Elements'
import { alabaster, darkGrey, blue, white, transition } from '@/Utilities'

const LoginReminder = styled(Link)`
  margin: 0 auto;
  background-color: ${blue};
  color: ${white};
  font-size: 16px;
  display: block;
  float: unset;
  border: solid 2px ${blue};
  box-shadow: 2px 2px 0 ${darkGrey};
  ${transition({ length: '0.1s' })}
  margin: 0 auto;
  margin-top: 20px;
  padding: 10px;
  &:hover{
    background-color: ${white};    
    color: ${blue};
    box-shadow: 3px 3px 0 ${blue};
  }  
`

const mapDispatchToProps = { submitPost }

@connect(state => ({ user: state.auth }), mapDispatchToProps)
export default class Submit extends Component {
  state = {
    title: null,
    content: null,
    redirectToReferrer: false
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const payload = { title: this.state.title, content: this.state.content }
    await this.props.submitPost(payload)
    this.setState({ redirectToReferrer: true })
  }

  handleFormChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render () {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state
    const { loggedIn } = this.props.user
    if (redirectToReferrer) {
      return <Redirect to={from} />
    }
    return (
      <Page backgroundColor={alabaster}
        padding="3rem 0 0 0 0">
        <Nav/>
        <VerticalFlex height="calc(100vh - 3rem)">
          {!loggedIn && (
            <LoginReminder to="/login">
              You need to log in first before posting
            </LoginReminder>
          )}
          {loggedIn && (
            <Card>
              <Form action="submit"
                id="submitPost"
                onSubmit={this.handleSubmit}
                onChange={this.handleFormChange}>
                <FormTitle>Submit a lightning talk⚡️</FormTitle>
                <div>
                  <label htmlFor="title">Title: </label>
                  <input type="text"
                    name="title"
                    id="title"
                    autoComplete="off"
                    placeholder="Ideally between 50 and 72 characters"
                    required />
                </div>
                <div>
                  <label htmlFor="name">post body: </label>
                  <textarea name="content"
                    id="content"
                    autoComplete="off"
                    placeholder="Go into detail about your lightning talk here"
                    required />
                </div>
                <SubmitButton type="submit">submit</SubmitButton>
              </Form>
            </Card>
          )}
        </VerticalFlex>
      </Page>
    )
  }
}
