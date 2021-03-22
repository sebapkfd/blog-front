import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';

const EditComment = () => {
    const [comment, setComment] = useState(null)
    const {id} = useParams();
    const [text, setText] = useState('');
    const history = useHistory();

    const getComment = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/comments/' + id, {
                method: 'GET',
                headers: {"Content-Type": "application/json"}
            })
            const comment_detail = await response.json();
            setComment(comment_detail)
            setText(comment_detail.text);
        } catch (err) {
            console.log(err);
        }
    };

    const submitData = async (e) => {
        e.preventDefault();
        try {
            const body = {text, user: comment.user, timestamp: comment.timestamp, post: comment.post}
            await fetch('http://localhost:5000/api/comments/edit/'+ id, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token
                },
                body: JSON.stringify(body)
            })
            history.goBack();
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getComment(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(comment) {
        return (
            <div>
                <form >
                    <label>Text</label>
                    <input
                        type='text'
                        name='text'
                        defaultValue={comment.text}
                        onChange={e => setText(e.target.value)}
                    />
                    <button onClick={(e) =>submitData(e)}>Save</button>
                </form>
            </div>
        )
    }
    else {
        return null
    }

}

export default EditComment;