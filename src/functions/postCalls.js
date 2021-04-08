const urlApi = 'https://afternoon-hollows-49383.herokuapp.com/';

export const getPostList = async () => {
    try {
        const response = await fetch(urlApi + 'api/posts', {
            method: 'GET',
            headers: {"Content-Type": "application/json"},
        })
        const data = await response.json();
        return Object.values(data);
    } catch (error) {
        console.log(error);
    }
    return null;
}

export const getUnpublishedList = async () => {
    try {
        const id = JSON.parse(localStorage.getItem('userSession')).user._id
        const response = await fetch(urlApi + 'api/unpublished/' + id, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token
            },
        })
        const data = await response.json();
        return Object.values(data);
    } catch (error) {
        console.log(error);
    }
    return null;
}

export const getPost = async (id) => {
    try {
        const response = await fetch(urlApi + 'api/posts/' + id, {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        })
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const updatePost = async (body, id) => {
    try {
        await fetch(urlApi + 'api/posts/edit/'+ id, {
            method: 'PUT',
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

export const deletePost = async (id) => {
    try {
        await fetch(urlApi + 'api/posts/:' + id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token
            },
            body: JSON.stringify({id})
        });
    } catch (err) {
        console.log(err)
    }
}

export const createPost = async (body) => {
    try {
        await fetch(urlApi + 'api/posts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token
            },
            body: JSON.stringify(body)
        })
        window.location.reload();
    } catch (err) {
        console.log(err)
    }
}