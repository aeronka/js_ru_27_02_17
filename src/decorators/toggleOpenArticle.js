import React from 'react'

export default (CustomComponentArticle) => class DecoratedComponentArticle extends React.Component {
    state = {
        openArticleId: null
    }

    toggleOpenArticle = openArticleId => ev => {
        this.setState({
            openArticleId
        })
    }

    render() {
        return <CustomComponentArticle {...this.props} {...this.state} toggleOpenArticle={this.toggleOpenArticle} />
    }
}