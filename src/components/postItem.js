import React from 'react';
import Options from './Options';
import { Link, useHistory } from 'react-router-dom';
import { deletePost } from './postCalls';

const PostItem = (props) => {
    const {post, useLink} = props;
    const history = useHistory();

    const deleteData = async (e) => {
        e.preventDefault();
        await deletePost(post._id);
        (useLink) ? window.location.reload() : history.push('/');
    }

    const title = (useLink) ? (
        <Link to={`/api/posts/${post._id}`}>
            <h3>{post.title}</h3>
        </Link>
    ) : (
        <h3>{post.title}</h3>
    );

    return(
        <div className={'post-item'}>
            {title}
            <p>{post.timestamp}</p>
            <p>{post.text}</p>
            <p>{post.user.username}</p>
            <Options 
                post={post} 
                deleteFunction={deleteData}
                refLink={`/api/posts/edit/${post._id}`}
            />
        </div>
    )
}

export default PostItem;