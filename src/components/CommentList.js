import React from 'react'

const CommentList = (props) => {
    const {comments} = props;

    return (
        <div>
            <h1>XDD</h1>
            {comments.map(comment => {
                return <h3>{comment.text}</h3>
            })}
        </div>
    )
}

export default CommentList;