import React from 'react';
import { Link } from 'react-router-dom';
import LogOut from './LogOut';
import verifySession from '../functions/verify';

const Navbar = () => {

    let session = (verifySession()) ? (
        <div className='session'>
            <Link to={`/blog-front/unpublished/:id`}>
                <button>Unpublished Posts</button>
            </Link>
            <LogOut/>
        </div>
    ) : (
        <div className='session'>
            <Link to={`/blog-front/signup`}>
                <button>Sign Up</button>
            </Link>
            <Link to={`/blog-front/login`}>
                <button>Log In</button>
            </Link>
        </div>
    );

    return (
        <div className='navbar'>
            <Link to={'/blog-front/'}>
                <button>Home</button>
            </Link>
            {session}
        </div>
    )
}

export default Navbar;