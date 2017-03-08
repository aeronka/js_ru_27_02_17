import React, {PropTypes, Component} from 'react'
import Article from './Article'
import toggleOpenArticle from '../decorators/toggleOpenArticle'

function ArticleList(props) {
    const {articles, openArticleId, toggleOpenArticle} = props

    const articleComponents = articles.map(article => <li key={article.id}>
        <Article article={article}
                 isOpen={article.id === openArticleId}
                 toggleOpen={toggleOpenArticle(article.id)}
        />
    </li>)

    return (
        <ul>
            {articleComponents}
        </ul>
    )
}

export default toggleOpenArticle(ArticleList)

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    openArticleId: PropTypes.string,
    toggleOpenArticle: PropTypes.func.isRequired
}