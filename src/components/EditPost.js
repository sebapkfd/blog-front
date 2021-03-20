import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom';

const EditPost = () => {
    const [post, setPost] = useState(null)
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const history = useHistory();

    const getPost = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/posts/' + id, {
                method: 'GET',
                headers: {"Content-Type": "application/json"}
            })
            const data = await response.json();
            setPost(data)
            setTitle(data.title);
            setText(data.text);
        } catch (err) {
            console.log(err);
        }
    };

    const submitData = async (e, isPublished) => {
        e.preventDefault();
        try {
            const body = {title, text, user: post.user, timestamp: post.timestamp, published: isPublished}
            await fetch('http://localhost:5000/api/posts/edit/'+ id, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token
                },
                body: JSON.stringify(body)
            })
            history.push('/')
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPost(); // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        onChange={e => setTitle(e.target.value)}
                    />
                    <label>Text</label>
                    <input
                        type='text'
                        name='text'
                        defaultValue={post.text}
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

export default EditPost;