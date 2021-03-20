import React from 'react'

const CommentList = (props) => {
    const {comments} = props;

    return (
        <div>
            <h5>{comments}</h5>
        </div>
    )
}

export default CommentList;