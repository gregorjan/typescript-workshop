import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 * {box-sizing: border-box}
`

import { App } from './App'

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('app'),
)
