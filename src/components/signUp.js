import React, {useState} from 'react'

const Form = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitData = async (e) => {
        e.preventDefault();
        console.log(`${username} ${password}`)
        try {
            const body = {username, password}
            const response = await fetch('http://localhost:5000/users/sign-up', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            console.log(response)
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