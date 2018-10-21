import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import SearchList from './SearchList'

const SearchWrapper = styled.div`
    width: 40vw;
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    position: relative;
`

const Input = styled.input`
    background-image: url('/assets/search-icon.png');
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 30px;
    width: 100%;
    height: 5vh;
    border: none;
    font-size: 10pt;
    float: left;
    color: #000;
    padding-left: 15px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
`

const SearchBox = ({ suggestions, isExpanded, searchText, onChange }) => (
    <SearchWrapper>
        <Input placeholder="Type for search..." onChange={onChange} />
        <SearchList
            highlightResult
            items={suggestions}
            isExpanded={isExpanded}
            searchText={searchText}
        />
    </SearchWrapper>
)

export default SearchBox
