import {articles} from '../fixtures'
import {DELETE_ARTICLE, FILTER_ARTICLE} from '../constants'

export default (state = articles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return state.filter(article => article.id !== payload.id)
        case FILTER_ARTICLE:
            if (!payload.selected.length) {
                return articles
            }
            //по сути ты удаляешь статьи, а должена хранить здесь список всех статей, а фильтровать где-то в другом месте(например в коннекте)
            return articles.filter(article => {
                for (let articleId of payload.selected) {
                    if (article.id === articleId) {
                        return true
                    }
                }
                return false
            })
    }

    return state
}
