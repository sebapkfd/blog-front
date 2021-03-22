import React from 'react'
import Post from './post';
import PostList from './postList';
import { getPostList } from './Calls';

const Home = () => {

    return (
        <div>
            <Post/>
            <PostList getData={getPostList}/>
        </div>
    )
}

export default Home;