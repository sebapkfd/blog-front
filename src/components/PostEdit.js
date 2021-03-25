import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getPost, updatePost } from './postCalls';

const PostEdit = () => {
    const [post, setPost] = useState(null)
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const history = useHistory();

    const getData = async () => {
        const {post_detail} = await getPost(id);
        setPost(post_detail);
        setTitle(post_detail.title);
        setText(post_detail.text);
    };

    const submitData = async (e, isPublished) => {
        e.preventDefault();
        const body = {title, text, user: post.user, timestamp: post.timestamp, published: isPublished}
        await updatePost(body, id);
        history.push('/');
    }

    useEffect(() => {
        getData(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(post) {
        return (
            <div>
                <form >
                    <label>Title</label>
                    <input
                        type='text'
                        name='title'
                        defaultValue={post.title}
                        required={true}
                        maxLength={20}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <label>Text</label>
                    <textarea 
                        name='text'
                        defaultValue={post.text}
                        required={true}
                        maxLength={200}
                        onChange={e => setText(e.target.value)}
                    />
                    <button onClick={(e) =>submitData(e, false)}>Save as Unpublished</button>
                    <button onClick={(e)=> submitData(e, true)}>Publish post</button>
                </form>
            </div>
        )
    }
    else {
        return null
    }
}

export default PostEdit;