import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const CommentInput = () => {
    const [text, setText] = useState('');
    const {id} = useParams();

    const submitData = async (e) => {
        e.preventDefault();
        try {
            const user = JSON.parse(localStorage.getItem('userSession')).user._id;
            const timestamp = new Date().toLocaleString();
            const body = {user, timestamp, text, post: id}
            await fetch('http://localhost:5000/api/posts/'+ id +'/comments', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token
                },
                body: JSON.stringify(body)
            })
            window.location.reload();
        } catch (err) {
            console.log(err)
        }
    }

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

export default CommentInput;