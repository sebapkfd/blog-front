import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import PostItem from './postItem';

const PostPage = () => {
    const [post, setPost] = useState(null)
    const {id} = useParams();

    const getPost = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/posts/' + id, {
                method: 'GET',
                headers: {"Content-Type": "application/json"}
            })
            const data = await response.json();
            setPost(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getPost() // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(post) {
        return (
            <div>
                <PostItem post={post}/>
            </div>
        )   
    }
    return null
    
}

export default PostPage;