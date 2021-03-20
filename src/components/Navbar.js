import React from 'react';
import { Link } from 'react-router-dom';
import LogOut from './LogOut'

const Navbar = () => {

    // refactor with veriffysession
    let session = (localStorage.length > 0) ? <LogOut/> : (
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
            <Link to={`/api/unpublished/:id`}>
                <button>Unpublished Posts</button>
            </Link>
            {session}
        </div>
    )
}

export default Navbar;