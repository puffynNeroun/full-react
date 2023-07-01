import React, {useState} from 'react';
import MyInput from "../UI/input/MyInput.jsx";
import MyButton from "../UI/button/MyButton.jsx";

const PostForm = ({create}) => {
    const [post, setPost] = useState({
        title: '',
        body: ''
    })

    const addNewPost = (e) => {
        e.preventDefault()
       const newPost = {
            ...post, id: Date.now()
       }
       create(newPost)
        setPost(
            {
                title: '',
                body: ''
            }
        )
    }

    return (
        <form action="">
            {/*Управляемый компонент*/}
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder='Название поста'
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                style={{marginBottom: '5px'}}
                type="text"
                placeholder='Описание поста'
            />
            {/*Неуаравляемый компонент*/}
            {/*<MyInput*/}
            {/*    ref={bodyInputRef}*/}
            {/*    style={{marginBottom: '5px'}}*/}
            {/*    type="text"*/}
            {/*    placeholder='Описание поста'*/}
            {/*/>*/}
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;