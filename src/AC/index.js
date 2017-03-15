import {INCREMENT, DELETE_ARTICLE, FILTER_ARTICLE} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}


export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function filterArticleList(selected) {
    return {
        type: FILTER_ARTICLE,
        payload: { selected }
    }
}