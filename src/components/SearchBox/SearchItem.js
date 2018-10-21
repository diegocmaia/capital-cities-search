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
    var blocks = item.split(new RegExp(`(${search})`, 'gi'))
    return (
        <span>
            {blocks.map(
                block =>
                    block.toLowerCase() === search.toLowerCase() ? (
                        <Highlight>{block}</Highlight>
                    ) : (
                        block
                    )
            )}
        </span>
    )
}

const SearchItem = ({ searchText: search, item, renderSuggestions }) => {
    return (
        <ItemWrapper>
            <span>{getBasicResult({ item, search })}</span>
        </ItemWrapper>
    )
}

export default SearchItem
