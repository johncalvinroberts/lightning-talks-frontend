import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './Router/Router'
import configStore from './Store'
import Http from '@/Http'
import { Provider } from 'react-redux'
import { registerUser } from './Store/Actions'
// fetch polyfill
import 'whatwg-fetch'
import { injectGlobal } from 'styled-components'

// initialize store
const store = configStore()
const token = localStorage.getItem('token')
export const http = new Http(token)
store.dispatch(registerUser(token))

// inject css global styles
injectGlobal`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0;
    padding: 0;
  }
  body {
    line-height: 1.6;
    color: #111;
    font-size: 16px;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, Avenir, "Avenir Next", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }  
  a {
    text-decoration: none;
  }
`

// mount the react app via the router
ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app'))
