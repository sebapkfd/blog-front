import React from 'react';
import { Link } from 'react-router-dom';

const PostOpt = (props) => {
    const {post, deleteFunction} = props;

    const handleDelete = (e) => {
        e.preventDefault();
        deleteFunction(e);
    }

    const userId = (localStorage.length > 0) ? JSON.parse(localStorage.getItem('userSession')).user._id : null;
    const deleteButton = (post.user._id === userId) ? <button onClick={handleDelete}>Delete</button> : null;
    const editButton = (post.user._id === userId) ? <button>Edit</button> : null;

    return (
        <div>
            {deleteButton}
                <Link to={`/api/posts/edit/${post._id}`}>
                    {editButton}
                </Link>
        </div>
    )
}

export default PostOpt;