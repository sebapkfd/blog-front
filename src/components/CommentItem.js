import React from 'react';
import Options from './Options';
import { deleteComment } from './commentCalls';

const CommentItem = (props) => {
    const {comment} = props;

    const deleteData = async (e) => {
        e.preventDefault();
        await deleteComment(comment._id);
        window.location.reload();
    }

    return (
        <div>
            <h3>{comment.user.username}</h3>
            <h3>{comment.timestamp}</h3>
            <h3>{comment.text}</h3>
            <Options 
                post={comment} 
                deleteFunction={deleteData}
                refLink={`/api/comments/edit/${comment._id}`}
            />
        </div>
    )
}

export default CommentItem;