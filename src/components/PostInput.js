import React, {useState} from 'react';
import verifySession from '../verify';
import { createPost } from './postCalls';

const PostInput = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const submitData = async (e, isPublished) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('userSession')).user._id;
        const timestamp = new Date().toLocaleString();
        const body = {title, text, user, timestamp, published: isPublished}
        await createPost(body);
    }

    if (verifySession()) {
        return (
            <div>
                <h1>Publish a Post!</h1>
                <form >
                    <label>Title</label>
                    <input
                        type='text'
                        name='title'
                        placeholder= 'Title'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <label>Text</label>
                    <input
                        type='text'
                        name='text'
                        placeholder= 'Text'
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                    <button onClick={(e) =>submitData(e, false)}>Save as Unpublished</button>
                    <button onClick={(e)=> submitData(e, true)}>Publish post</button>
                </form>
            </div>
        )
    }
    return null;
}

export default PostInput;