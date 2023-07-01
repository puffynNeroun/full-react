import React from 'react';
import MyButton from "../UI/button/MyButton.jsx";
import {useNavigate} from 'react-router-dom'

const Stylization = (props) => {
    const router = useNavigate()
    return (
        <div className='app-post'>
            <div className='post'>
                <div className="post__content">
                    <strong>{props.post.id} {props.post.title}</strong>
                    <div>{props.post.body}
                    </div>
                </div>
                <div className="post__btn">
                    <MyButton onClick={() => props.remove(props.post)}>
                        Delete
                    </MyButton>
                    <MyButton onClick={() => router(`/posts/${props.post.id}`)}>
                        Open
                    </MyButton>
                </div>
            </div>
        </div>
    );
};

export default Stylization;