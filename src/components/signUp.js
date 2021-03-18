import React, {useState} from 'react'

const Form = () => {
    //Add confirm password

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitData = async (e) => {
        e.preventDefault();
        try {
            const body = {username, password}
            await fetch('http://localhost:5000/api/signup', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h1>Sign Up</h1>
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
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default Form;