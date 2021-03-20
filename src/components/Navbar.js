import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div>
            <Link to={'/'}>
                <button>Home</button>
            </Link>
            <Link to={`/api/unpublished/:id`}>
                <button>Unpublished Posts</button>
            </Link>
            
        </div>
    )
}

export default Navbar;