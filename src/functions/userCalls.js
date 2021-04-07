export const signUpCall = async (body) => {
    try {
        await fetch('http://localhost:5000/api/signup', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
    } catch (err) {
        console.log(err)
    }
}

export const logInCall = async (body) => {
    try {
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        const data = await response.json();
        const {user, token} = data;
        localStorage.setItem('userSession', JSON.stringify({user, token}))
    } catch (err) {
        console.log(err)
    }
}