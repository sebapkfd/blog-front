import React, {useState, useEffect} from 'react';

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
                return(
                    <div key={post._id}>
                        <h3>{post.title}</h3>
                        <p>{post.timestamp}</p>
                        <p>{post.text}</p>
                        <p>{post.user.username}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default PostList;