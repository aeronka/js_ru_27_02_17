import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {

    constructor () {
        super();
        this.state = {
            commentListIsOpen: false
        };
    }

    render () {
        const {comments} = this.props;
        const {commentListIsOpen} = this.state;

        let commentList;
        let commentsButtonName;

        if (commentListIsOpen) {
            const commentsComponents = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>);

            commentList = <ul>{commentsComponents}</ul>;
            commentsButtonName = 'Скрыть комментарии';
        } else {
            commentList = null;
            commentsButtonName = 'Показать комментарии';
        }

        return (
            <div>
                <button onClick={this.commentClick}>{commentsButtonName}</button>
                {commentList}
            </div>
        )
    }

    commentClick = (ev) => {
        this.setState({
            commentListIsOpen: !this.state.commentListIsOpen
        });
    }
}

export default CommentList
