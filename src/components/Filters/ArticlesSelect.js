import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import Select from 'react-select'
import {filterArticleList} from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        selected: null
    }

    handleChange = selected => {
        const {filterArticleList} = this.props
        this.setState({ selected })
        filterArticleList(selected.map(article => article.value))
    }

    render() {
        const { selected } = this.state
        const { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect(state => ({
    articles: state.selectArticles
}), { filterArticleList })(SelectFilter)
