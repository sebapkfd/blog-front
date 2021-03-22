import React from 'react';
import { Link } from 'react-router-dom';

const Options = (props) => {
    const {post, deleteFunction, refLink} = props;

    const handleDelete = (e) => {
        e.preventDefault();
        deleteFunction(e);
    }

    const userId = (localStorage.length > 0) ? JSON.parse(localStorage.getItem('userSession')).user._id : null;
    const deleteButton = (post.user._id === userId) ? <button onClick={handleDelete}>Delete</button> : null;
    const editButton = (post.user._id === userId) ? <button>Edit</button> : null;

    return (
        <div className={'options'}>
            {deleteButton}
            <Link to={refLink}>
                {editButton}
            </Link>
        </div>
    )
}

export default Options;