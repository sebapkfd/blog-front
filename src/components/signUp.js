import React, {useState} from 'react';
import { useHistory} from 'react-router-dom';
import { signUpCall } from '../functions/userCalls';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const history = useHistory();

    const submitData = async (e) => {
        e.preventDefault();
        if(password === confirm) {
            const body = {username, password}
            await signUpCall(body)
            history.push('/blog-front/login')
        }
    }

    return (
        <div className={'session-form'}>
            <h1>Sign Up</h1>
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
                <label>Confirm password</label>
                <input
                    type='password'
                    name='confirm'
                    placeholder= 'Confirm password'
                    value={confirm}
                    required={true}
                    maxLength={50}
                    onChange={e => setConfirm(e.target.value)}
                />
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;