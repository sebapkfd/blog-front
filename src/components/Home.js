import React from 'react'
import PostInput from './PostInput';
import PostList from './PostList';
import { getPostList } from '../functions/postCalls';

const Home = () => {

    return (
        <div className={'home-page'}>
            <PostInput/>
            <PostList getData={getPostList}/>
        </div>
    )
}

export default Home;