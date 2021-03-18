import React from 'react';

const PostItem = (props) => {
    const {post} = props;

    const userId = (localStorage.length > 0) ? JSON.parse(localStorage.getItem('userSession')).user._id : null;
    const deleteButton = (post.user._id === userId) ? <button>Delete</button> : null;
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