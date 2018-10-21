import React from 'react'
import { PropTypes } from 'prop-types'

import styled from 'styled-components'

const ItemWrapper = styled.div`
    height: 30px;
    width: 100%;
    padding-left: 15px;
    display: flex;
    align-items: center;

    &:hover {
        cursor: pointer;
        background-color: #fae9c8;
    }
`

const Highlight = styled.strong`
    color: #f8b333;
`

const getBasicResult = ({ item, search = 'er' }) => {
    const lowerCaseWord = item.toLowerCase()
    const lowerCaseSearch = search.toLowerCase()
    const matchItemSearch = lowerCaseWord.match(lowerCaseSearch)

    if (!item) {
        return null
    }

    if (!matchItemSearch) {
        return <span>{item}</span>
    }

    const array = item.split('')
    const indexStartMatch = matchItemSearch.index
    const indexEndMatch = search.length + indexStartMatch - 1

    const componentsArray = array.map((letter, index) => {
        if (index >= indexStartMatch && index <= indexEndMatch) {
            return <Highlight key={index}>{letter}</Highlight>
        } else {
            return <span key={index}>{letter}</span>
        }
    })

    return <span>{componentsArray}</span>
}

const SearchItem = ({ searchText: search, item, renderSuggestions }) => {
    return (
        <ItemWrapper>
            <span>{getBasicResult({ item, search })}</span>
        </ItemWrapper>
    )
}

export default SearchItem
