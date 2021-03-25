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
        <div className={'comment-item'}>
            <div className={'comment-item__info'}>
                <span>
                    <p>{comment.user.username}, at {comment.timestamp}</p>
                </span>
            </div>
            <div className={'comment-item__text'}>
                <span>
                    <p>{comment.text}</p>
                </span>
            </div>
            
            <Options 
                post={comment} 
                deleteFunction={deleteData}
                refLink={`/api/comments/edit/${comment._id}`}
            />
        </div>
    )
}

export default CommentItem;