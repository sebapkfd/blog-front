import React from 'react';

const PostItem = (props) => {
    const {post} = props;

    const deletePost = async (e) => {
        e.preventDefault();
        try {
            await fetch('http://localhost:5000/api/posts/:' + post._id, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token
                },
                body: JSON.stringify({id: post._id})
            })
            window.location.reload();
        } catch (err) {
            console.log(err)
        }
    }

    const userId = (localStorage.length > 0) ? JSON.parse(localStorage.getItem('userSession')).user._id : null;
    const deleteButton = (post.user._id === userId) ? <button onClick={deletePost}>Delete</button> : null;
    const editButton = (post.user._id === userId) ? <button>Edit</button> : null;

    return(
        <div>
            <h3>{post.title}</h3>
            <p>{post.timestamp}</p>
            <p>{post.text}</p>
            <p>{post.user.username}</p>
            {deleteButton}
            {editButton}
        </div>
    )
}

export default PostItem;