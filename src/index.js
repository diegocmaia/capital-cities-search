import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'

import App from './MainApp/container'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body,
    html {
        margin: 0;
        padding: 0;
        width: 100vw;
        font-family: 'Open Sans', sans-serif;
        overflow-x: hidden;
        font-size: 14px;
        background-color: #f8b333;
    }
`

ReactDOM.render(
    <React.Fragment>
        <GlobalStyle whiteColor />
        <App />
    </React.Fragment>,
    document.getElementById('root')
)
