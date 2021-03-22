import React, {useState, useEffect} from 'react';
import PostItem from './postItem';

const PostList = (props) => {
    const [posts, setPosts] = useState([])
    const {getData} = props;

    useEffect(() => {
        async function fetchData() {
            let data = await getData();
            setPosts(data);
        }
        fetchData();
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