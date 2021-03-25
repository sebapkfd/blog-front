import React, { useState } from 'react'
import { useHistory} from 'react-router-dom';
import { logInCall } from './userCalls';

const LogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const submitData = async (e) => {
        e.preventDefault();
        const body = {username, password}
        await logInCall(body);
        history.push('/');
        window.location.reload();
    }

    return (
        <div className={'session-form'}>
            <h1>Log In</h1>
            <form onSubmit={submitData}>
                <label>Username</label>
                <input
                    type='text'
                    name='username'
                    placeholder= 'username'
                    value={username}
                    required={true}
                    maxLength={20}
                    onChange={e => setUsername(e.target.value)}
                />
                <label>Password</label>
                <input
                    type='password'
                    name='password'
                    placeholder= 'password'
                    value={password}
                    required={true}
                    maxLength={50}
                    onChange={e => setPassword(e.target.value)}
                />
                <button>Log In</button>
            </form>
        </div>
    )
}

export default LogIn;