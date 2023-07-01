import React, {useRef, useState} from 'react';
import PostsList from "./PostsList.jsx";
import MyButton from "../UI/button/MyButton.jsx";
import MyInput from "../UI/input/MyInput.jsx";

const PostItem = () => {
    const [posts, setPosts] = useState([
        {
            id: 1.,
            title: 'JavaScript1',
            body: 'Description'
        },
        {
            id: 2.,
            title: 'JavaScript2',
            body: 'Description'
        },
        {
            id: 3.,
            title: 'JavaScript3',
            body: 'Description'
        }
    ])
    const [posts2, setPosts2] = useState([
        {
            id: 1.,
            title: 'Python1',
            body: 'Description'
        },
        {
            id: 2.,
            title: 'Python2',
            body: 'Description'
        },
        {
            id: 3.,
            title: 'Python3',
            body: 'Description'
        }
    ])

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addNewPost = (e) => {
        e.preventDefault()
        // console.log(title)
        const newPost = {
            id: Date.now(),
            title,
            body
        }
        setPosts([...posts, newPost])
        setTitle('')
        setBody('')
    }

    return (
        <div>
            <form action="">
                {/*Управляемый компонент*/}
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder='Название поста'
                />
                <MyInput
                    value={body}
                    onChange={e => setBody(e.target.value)}
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
            <PostsList posts={posts} title='Посты про JS'/>
            <PostsList posts={posts2} title='Посты про Python'/>
        </div>
    );
};

export default PostItem;