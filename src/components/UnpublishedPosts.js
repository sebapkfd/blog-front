import React, {useState, useEffect} from 'react';
import PostItem from './postItem';
import { getUnpublishedList } from './Calls';

const UnpublishedPosts = () => {
    const [postList, setPostList] = useState([])

    useEffect(async () => {
        let data = await getUnpublishedList();
        setPostList(data)
    }, [])


    return (
        <div>
            {postList.map(post => {
                return <PostItem key={post._id} post={post} useLink={true}/>
            })}
        </div>
    )
}

export default UnpublishedPosts;