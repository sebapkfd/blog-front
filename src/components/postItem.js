import React from 'react';
import PostOpt from './PostOpt';
import { Link } from 'react-router-dom';

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

    return(
            <div>
                <Link to={`/api/posts/${post._id}`}>
                    <h3>{post.title}</h3>
                </Link>
                <p>{post.timestamp}</p>
                <p>{post.text}</p>
                <p>{post.user.username}</p>
                <PostOpt 
                    post={post} 
                    deleteFunction={deletePost}
                    refLink={`/api/posts/edit/${post._id}`}
                />
            </div>
    )
}

export default PostItem;