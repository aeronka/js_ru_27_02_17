import {combineReducers} from 'redux'
import articleReducer from './articles'
import counterReducer from './counter'
import selectArticleReducer from './selectArticles'


export default combineReducers({
    articles: articleReducer,
    selectArticles: selectArticleReducer,
    count: counterReducer
})