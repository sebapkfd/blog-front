import React from 'react';
import PostOpt from './PostOpt';

const CommentItem = (props) => {
    const {comment} = props;

    const deleteComment = async (e) => {
        e.preventDefault();
        try {
            await fetch('http://localhost:5000/api/comments/:' + comment._id, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token
                },
                body: JSON.stringify({id: comment._id})
            })
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <h3>{comment.user.username}</h3>
            <h3>{comment.timestamp}</h3>
            <h3>{comment.text}</h3>
            <PostOpt 
                post={comment} 
                deleteFunction={deleteComment}
                refLink={`/api/comments/edit/${comment._id}`}
            />
        </div>
    )
}

export default CommentItem;