import React, {useState, useEffect} from 'react';
import PostItem from './postItem';

const UnpublishedPosts = () => {
    const [postList, setPostList] = useState([])

    const getData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/unpublished', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token
                },
            })
            const data = await response.json();
            setPostList(Object.values(data))
        } catch (error) {
            console.log(error);
        }        
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <div>
            {postList.map(post => {
                return <PostItem key={post._id} post={post}/>
            })}
        </div>
    )
}

export default UnpublishedPosts;