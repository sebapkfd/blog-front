import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import PostItem from './PostItem';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

const PostPage = () => {
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])
    const {id} = useParams();

    const getPost = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/posts/' + id, {
                method: 'GET',
                headers: {"Content-Type": "application/json"}
            })
            const {post_detail, post_comments} = await response.json();
            setPost(post_detail)
            setComments(post_comments)
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getPost() // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(post) {
        return (
            <div className={'post-page'}>
                <PostItem post={post} useLink={false}/>
                {(post.published) ? <CommentInput/> : null}
                <CommentList comments={comments}/>
            </div>
        )   
    }
    return null
    
}

export default PostPage;