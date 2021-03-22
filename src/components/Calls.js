export const getPostList = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/posts', {
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
        const response = await fetch('http://localhost:5000/api/unpublished/' + id, {
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