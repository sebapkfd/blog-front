import React, {useState} from 'react'

const Post = () => {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const submitData = async (e, isPublished) => {
        e.preventDefault();
        try {
            const user = JSON.parse(localStorage.getItem('userSession')).user._id;
            const timestamp = new Date().toLocaleString();
            const body = {title, text, user, timestamp, published: isPublished}
            await fetch('http://localhost:5000/api/posts', {
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

    //Add verification 
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

export default Post;