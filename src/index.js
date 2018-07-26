import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './Router'
import store from './Store'
import { Provider } from 'react-redux'
import { registerUser } from './Store/Actions'
import { black } from '@/Utilities'
// fetch polyfill
import 'whatwg-fetch'
import { injectGlobal } from 'styled-components'

// initialize store
store.dispatch(registerUser())

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
    color: ${black};
    font-size: 16px;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, Avenir, "Avenir Next", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    min-height: 100vh;
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
