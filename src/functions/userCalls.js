const urlApi = 'https://afternoon-hollows-49383.herokuapp.com/';

export const signUpCall = async (body) => {
    try {
        await fetch( urlApi + 'api/signup', {
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
        const response = await fetch( urlApi + 'api/login', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        if(response.status === 200) {
            const data = await response.json();
            const {user, token} = data;
            localStorage.setItem('userSession', JSON.stringify({user, token}))
        }
    } catch (err) {
        console.log(err)
    }
}