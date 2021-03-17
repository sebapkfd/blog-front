import React from 'react'

const LogOut = () => {

    const closeSession = () => {
        localStorage.clear()
        window.location.reload();
    }

    const logOutButton = (localStorage.length > 0) ? 
        <button onClick={closeSession}>Log Out</button> : null;
    return (
        <div>
            {logOutButton}
        </div>
    )
}

export default LogOut;