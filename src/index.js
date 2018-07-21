import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './Router/Router'

import { injectGlobal } from 'styled-components'
// fetch polyfill
import 'whatwg-fetch'

// inject css reset styles
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
ReactDOM.render(<AppRouter />, document.getElementById('app'))
