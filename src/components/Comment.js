import React, {PropTypes} from 'react'

function Comment(props) {
    const { text, user } = props.comment
    return (
        <div>
            <p>{text} <b>by {user}</b></p>
        </div>
    )
}

export default Comment

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.number,
        user: PropTypes.string,
        text: PropTypes.string
    }).isRequired
}