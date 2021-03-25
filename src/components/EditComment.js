import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { updateComment, getComment } from './commentCalls';

const EditComment = () => {
    const [comment, setComment] = useState(null)
    const {id} = useParams();
    const [text, setText] = useState('');
    const history = useHistory();

    const getData = async () => {
        let comment_detail = await getComment(id);
        setComment(comment_detail);
        setText(comment_detail.text);
    };

    const submitData = async (e) => {
        e.preventDefault();
        await updateComment(text, comment, id);
        history.goBack();
    }

    useEffect(() => {
        getData(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(comment) {
        return (
            <div>
                <form >
                    <label>Text</label>
                    <input
                        type='textarea'
                        name='text'
                        defaultValue={comment.text}
                        maxLength={200}
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