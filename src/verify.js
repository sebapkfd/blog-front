import jwt_decode from "jwt-decode";

const verifySession = () => {
    if(localStorage.length > 0) {
        const token = JSON.parse(localStorage.getItem('userSession')).token
        try {
            let {exp} = jwt_decode(token)
            if (Date.now() >= exp * 1000) {
                localStorage.clear()
            }
        } catch (err) {
            console.log(err)   
        }
    }
}

export default verifySession;