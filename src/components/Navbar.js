import React from 'react';
import { Link } from 'react-router-dom';
import LogOut from './LogOut';
import verifySession from '../verify';

const Navbar = () => {

    let session = (verifySession()) ? (
        <div>
            <Link to={`/api/unpublished/:id`}>
                <button>Unpublished Posts</button>
            </Link>
            <LogOut/>
        </div>
    ) : (
        <div>
            <Link to={`/api/signup`}>
                <button>Sign Up</button>
            </Link>
            <Link to={`/api/login`}>
                <button>Log In</button>
            </Link>
        </div>
    );

    return (
        <div>
            <Link to={'/'}>
                <button>Home</button>
            </Link>
            {session}
        </div>
    )
}

export default Navbar;