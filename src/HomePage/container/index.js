import React, { Component } from 'react'

import _ from 'lodash'
import axios from 'axios'
import config from '../../config'

import HomePageView from '../view'

// We can use this container to connect with the store
export default class HomePageContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            suggestions: [],
            expanded: false,
            loading: false,
            searchText: ''
        }
    }

    componentDidMount() {
        this.onChangeSearchText = _.debounce(this.onChangeSearchText.bind(this), 300)
    }

    onChangeSearchText(input, e) {
        this.setState({ expanded: true, searchText: input, loading: true })
        if (input) {
            let suggestions = []
            axios
                .get(config.searchApiUrl + input)
                .then(res => {
                    suggestions = res.data.map(r => r.capital)
                    this.setState({ suggestions, loading: false })
                })
                .catch(err => {
                    this.setState({ suggestions: [], loading: false })
                })
        } else {
            this.setState({ expanded: false, suggestions: [], loading: false })
        }
    }

    render() {
        const { searchText, expanded, suggestions, loading } = this.state

        return (
            <HomePageView
                isLoading={loading}
                isExpanded={expanded}
                searchText={searchText}
                suggestions={suggestions}
                onChangeSearch={e => this.onChangeSearchText(e.target.value)}
            />
        )
    }
}
