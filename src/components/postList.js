import React, {useState, useEffect} from 'react';
import PostItem from './postItem';

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
                return <PostItem key={post._id} post={post}/>
            })}
        </div>
    )
}

export default PostList;