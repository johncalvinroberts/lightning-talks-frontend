import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Popular, Post, Submit, Login, Profile, NotFound } from '@/pages'

export default class AppRouter extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/popular" component={Popular} />
          <Route path="/post/:slug" component={Post} />
          <Route path="/submit" component={Submit} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/profile/:slug" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}
