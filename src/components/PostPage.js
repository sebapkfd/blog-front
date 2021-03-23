import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import PostItem from './PostItem';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import { getPost } from './postCalls';

const PostPage = () => {
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])
    const {id} = useParams();

    const getData = async () => {
        const {post_detail, post_comments} = await getPost(id);
        setPost(post_detail);
        setComments(post_comments);
    };

    useEffect(() => {
        getData() // eslint-disable-next-line react-hooks/exhaustive-deps
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