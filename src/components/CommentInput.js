import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import verifySession from '../verify';
import { createComment } from './commentCalls';

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
            <div>
                <form onSubmit={submitData}>
                    <label>Post a comment</label>
                    <input
                        type='textarea'
                        name='comment'
                        placeholder= 'Comment'
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