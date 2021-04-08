const urlApi = 'https://afternoon-hollows-49383.herokuapp.com/';

export const createComment = async (text, post) => {
    const user = JSON.parse(localStorage.getItem('userSession')).user._id;
    const timestamp = new Date().toLocaleString();
    const body = {user, timestamp, text, post}
    try {
        await fetch( urlApi + 'api/comments', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token
            },
            body: JSON.stringify(body)
        })
    } catch (err) {
        console.log(err)
    }
}

export const deleteComment = async (id) => {
    try {
        await fetch( urlApi + 'api/comments/:' + id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token
            },
            body: JSON.stringify({id})
        })
    } catch (err) {
        console.log(err);
    }
}

export const updateComment = async (text, comment, id) => {
    try {
        const body = {text, user: comment.user, timestamp: comment.timestamp, post: comment.post}
        await fetch( urlApi + 'api/comments/edit/'+ id, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token
            },
            body: JSON.stringify(body)
        })
    } catch (err) {
        console.log(err);
    }
}

export const getComment = async (id) => {
    try {
        const response = await fetch( urlApi + 'api/comments/' + id, {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        })
        const comment_detail = await response.json();
        return comment_detail;
    } catch (err) {
        console.log(err);
    }
}