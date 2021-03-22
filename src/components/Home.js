import React from 'react'
import PostInput from './PostInput';
import PostList from './PostList';
import { getPostList } from './postCalls';

const Home = () => {

    return (
        <div>
            <PostInput/>
            <PostList getData={getPostList}/>
        </div>
    )
}

export default Home;