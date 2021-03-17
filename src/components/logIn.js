import React, { useState } from 'react'

const LogIn = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitData = async (e) => {
        e.preventDefault();
        console.log(`${username} ${password}`)
        try {
            const body = {username, password}
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            const data = await response.json();
            const {user, token} = data;
            localStorage.setItem('userSession', JSON.stringify({user, token}))
            console.log(user, token)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={submitData}>
                <label>Username</label>
                <input
                    type='text'
                    name='username'
                    placeholder= 'username'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <label>Password</label>
                <input
                    type='text'
                    name='password'
                    placeholder= 'password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button>Log In</button>
            </form>
        </div>
    )
}

export default LogIn;