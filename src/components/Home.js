import React from 'react'
import Form from './signUp';
import LogIn from './logIn';
import Post from './post';
import PostList from './postList';
import LogOut from './LogOut';
import { Link } from 'react-router-dom'

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
            <LogOut/>
            <Link to={`/api/unpublished/:id`}>
                <button>Unpublished Posts</button>
            </Link>
            {session}
            <PostList/>
        </div>
    )
}

export default Home;