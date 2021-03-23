import React, {useState, useEffect} from 'react';
import PostItem from './PostItem';

const PostList = (props) => {
    const [posts, setPosts] = useState([])
    const {getData} = props;

    useEffect(() => {
        async function fetchData() {
            let data = await getData();
            setPosts(data);
        }
        fetchData();// eslint-disable-next-line 
    }, [])


    return (
        <div className='post-list'>
            {posts.map(post => {
                return <PostItem key={post._id} post={post} useLink={true}/>
            })}
        </div>
    )
}

export default PostList;