import React from 'react';
import { useHistory } from 'react-router-dom';

const LogOut = () => {
    const history = useHistory();

    const closeSession = () => {
        localStorage.clear()
        history.push('/');
        window.location.reload();
    }

    const logOutButton = (localStorage.length > 0) ? <button onClick={closeSession}>Log Out</button> : null ;
    
    return (
        <div>{logOutButton}</div>
    )
}

export default LogOut;