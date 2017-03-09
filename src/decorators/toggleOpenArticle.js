import React from 'react'

export default (CustomComponentArticle) => class DecoratedComponentArticle extends React.Component {
    state = {
        //Не привязывайся к названиям сущностей, вся суть декораторов в универсальности. Сделай openItemId
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
