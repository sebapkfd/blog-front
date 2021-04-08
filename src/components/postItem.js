import React from 'react';
import Options from './Options';
import { Link, useHistory } from 'react-router-dom';
import { deletePost } from '../functions/postCalls';
import formatDate from '../functions/formatDate';

const PostItem = (props) => {
    const {post, useLink} = props;
    const postDate = formatDate(post.timestamp);
    const history = useHistory();

    const deleteData = async (e) => {
        e.preventDefault();
        await deletePost(post._id);
        (useLink) ? window.location.reload() : history.push('/');
    }

    const title = (useLink) ? (
        <Link to={`/blog-front/posts/${post._id}`}>
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
                <span>
                    <p>Posted at {postDate}, by {post.user.username}</p>
                </span>
            </div>
            <div className='post-item__text'>
                <span>
                    <p> {post.text} </p>
                </span>
            </div>
            <Options 
                post={post} 
                deleteFunction={deleteData}
                refLink={`/blog-front/posts/edit/${post._id}`}
            />
        </div>
    )
}

export default PostItem;