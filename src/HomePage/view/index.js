import React from 'react'
import styled from 'styled-components'

import { Box, Text, SearchBox, LoadingModal } from '../../components'

const MainWrapper = styled.div`
    color: #ffffff;
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`

const HomePageView = props => (
    <MainWrapper>
        {props.isLoading ? <LoadingModal isLoading={props.isLoading} /> : null}
        <Box>
            <Text>Tell me a capital city and I'll show you the best food experiences ever ;)</Text>
            <SearchBox
                searchText={props.searchText}
                isExpanded={props.isExpanded}
                suggestions={props.suggestions}
                onChange={props.onChangeSearch}
            />
        </Box>
    </MainWrapper>
)

export default HomePageView
