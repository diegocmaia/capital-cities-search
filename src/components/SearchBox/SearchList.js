import React from 'react'
import { PropTypes } from 'prop-types'

import styled from 'styled-components'

import SearchItem from './SearchItem'

const ListWrapper = styled.div`
    display: ${props => (props.isExpanded ? 'flex' : 'none')};
    width: 100%;
    max-height: 200px;
    overflow-y: scroll;
    flex-wrap: wrap;
    background-color: #ffffff;
    color: #000000;
    border-radius: 5px;
    margin-top: 60px;
    position: absolute;
`

const ItemWrapper = styled.div`
    height: 30px;
    padding-left: 15px;
    display: flex;
    align-items: center;

    &:hover {
        background-color: #fae9c8;
    }
`

const SearchList = ({ searchText, isExpanded = false, items }) => {
    return (
        <ListWrapper isExpanded={isExpanded}>
            {items && items.length ? (
                items.map((item, key) => (
                    <SearchItem key={item} item={item} searchText={searchText} />
                ))
            ) : (
                <ItemWrapper>
                    <span>No result found...</span>
                </ItemWrapper>
            )}
        </ListWrapper>
    )
}

export default SearchList
