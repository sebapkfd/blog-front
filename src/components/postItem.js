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
            <h2>{post.title}</h2>
        </Link>
    ) : (
        <h2>{post.title}</h2>
    );

    return(
        <div className={'post-item'}>
            <div className='post-item__title'>
                {title}
            </div>
            <div className='post-item__info'>
                <p>Posted at {post.timestamp}, by {post.user.username}</p>
            </div>
            <div className='post-item__text'>
                <p>{post.text}</p>
            </div>
            <Options 
                post={post} 
                deleteFunction={deleteData}
                refLink={`/api/posts/edit/${post._id}`}
            />
        </div>
    )
}

export default PostItem;