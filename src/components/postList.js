import React, {useState, useEffect} from 'react';
import PostItem from './postItem';
import { Link } from 'react-router-dom';

const PostList = () => {
    const [posts, setPosts] = useState([])

    const getData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/posts', {
                method: 'GET',
                headers: {"Content-Type": "application/json"},
            })
            const data = await response.json();
            setPosts(Object.values(data))
        } catch (error) {
            console.log(error);
        }        
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <div>
            {posts.map(post => {
                return (
                    <Link to={`/api/posts/${post._id}`}>
                        <PostItem key={post._id} post={post}/>
                    </Link>
                )
                
            })}
        </div>
    )
}

export default PostList;