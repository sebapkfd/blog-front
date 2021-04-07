import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import verifySession from '../functions/verify';
import { createComment } from '../functions/commentCalls';

const CommentInput = () => {
    const [text, setText] = useState('');
    const {id} = useParams();

    const submitData = async (e) => {
        e.preventDefault();
        await createComment(text, id)
        window.location.reload();
    }

    if(verifySession()) {
        return (
            <div className={'comment-input'}>
                <form onSubmit={submitData}>
                    <label>Post a comment</label>
                    <textarea 
                        name='comment'
                        placeholder= 'Comment'
                        maxLength={200}
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                    <button>OK</button>
                </form>
            </div>
        )
    }
    return null;
}

export default CommentInput;