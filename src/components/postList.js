import React, {useState, useEffect} from 'react';
import PostItem from './postItem';
import { getPostList } from './Calls';

const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(async () => {
        let data = await getPostList();
        setPosts(data);
    }, [])


    return (
        <div>
            {posts.map(post => {
                return <PostItem key={post._id} post={post} useLink={true}/>
            })}
        </div>
    )
}

export default PostList;