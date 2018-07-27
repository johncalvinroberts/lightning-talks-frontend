import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Popular, Post, Submit, Login, Profile, NotFound } from '@/pages'

export default class AppRouter extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/popular" component={Popular} />
          <Route exact path="/post/:slug" component={Post} />
          <Route exact path="/submit" component={Submit} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}
