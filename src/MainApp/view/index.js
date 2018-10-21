import React from 'react'
import styled from 'styled-components'

import HomePage from '../../HomePage/container'

const AppWrapper = styled.div`
    height: 100vh;

    background-image: linear-gradient(
            to left bottom,
            rgba(248, 179, 51, 0.2),
            rgba(248, 179, 51, 0.6)
        ),
        url('/assets/restaurant.png');
    background-size: cover;
    background-position: center;
    clip-path: polygon(0 0, 100% 0, 100% 90vh, 0 100%);
`

const App = props => (
    <AppWrapper>
        <HomePage />
    </AppWrapper>
)

export default App
