import React, {Component} from 'react'
import CommentList from './CommentList'

class Article extends Component {

    constructor() {
        super();
        this.state = {
            articleIsOpen: false
        };
    }

    render() {
        const {article} = this.props;
        const {articleIsOpen} = this.state;
        //Я б эту проверку спрятал в CommentList
        const comments = article.comments ? <CommentList comments={article.comments} /> : null;
        const body = articleIsOpen ? <section>{article.text}{comments}</section> : null;

        return (
            <div>
                <h3 onClick={this.articleClick}>{article.title}</h3>
                {body}
            </div>
        )
    }

    articleClick = (ev) => {
        this.setState({
            articleIsOpen: !this.state.articleIsOpen
        });
    }
}

export default Article
