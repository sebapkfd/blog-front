import React, {useState} from 'react';
import verifySession from '../functions/verify';
import { createPost } from '../functions/postCalls';

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
            <div className={'post-input'}>
                <h1>Share your thoughts!</h1>
                <form >
                    <label>Title</label>
                    <input
                        type='text'
                        name='title'
                        placeholder= 'Title'
                        value={title}
                        required={true}
                        maxLength={20}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <label>Text</label>
                    <textarea 
                        name='text'
                        placeholder= 'Text'
                        value={text}
                        required={true}
                        maxLength={200}
                        onChange={e => setText(e.target.value)}
                    />
                    <div>
                        <button onClick={(e) =>submitData(e, false)}>Save as Unpublished</button>
                        <button onClick={(e)=> submitData(e, true)}>Publish post</button>
                    </div>
                </form>
            </div>
        )
    }
    return null;
}

export default PostInput;