import React, {Component} from 'react'

class NewCommentForm extends Component {
    state = {
        name: '',
        commentText: ''
    }

    render() {
        return (
            <form>
                <span>Ваше имя: </span>
                <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
                <div>Ваш комментарий:</div>
                <textarea value={this.state.commentText} onChange={this.handleCommentTextChange}/>
                <input type="submit" value="Прокомментировать"/>
            </form>
        )
    }

    handleNameChange = ev => {
        if (ev.target.value.length > 10) return

        this.setState({
            name: ev.target.value
        })
    }

    handleCommentTextChange = ev => {
        if (ev.target.value.length >= 150) return

        this.setState({
            commentText: ev.target.value
        })
    }
}

export default NewCommentForm