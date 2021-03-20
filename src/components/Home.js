import React from 'react'
import Form from './signUp';
import LogIn from './logIn';
import Post from './post';
import PostList from './postList';

const Home = () => {
    let session = (localStorage.length > 0) ? <Post/> : (
        <div>
          <Form/>
          <LogIn/>
        </div>
        );

    return (
        <div>
            <h1>Hello World</h1>
            {session}
            <PostList/>
        </div>
    )
}

export default Home;