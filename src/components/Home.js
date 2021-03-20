import React from 'react'
import Post from './post';
import PostList from './postList';

const Home = () => {
    //Maybe change the verification to Post definition
    let session = (localStorage.length > 0) ? <Post/> : null;

    return (
        <div>
            {session}
            <PostList/>
        </div>
    )
}

export default Home;