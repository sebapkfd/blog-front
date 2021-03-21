import React from 'react';

const CommentItem = (props) => {
    const {comment} = props;

    return (
        <div>
            <h3>{comment.user.username}</h3>
            <h3>{comment.timestamp}</h3>
            <h3>{comment.text}</h3>
        </div>
    )
}

export default CommentItem;