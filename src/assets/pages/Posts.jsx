import React, {useEffect, useMemo, useRef, useState} from 'react';
import PostsList from "../components/_Stylization/PostsList.jsx";
import PostForm from "../components/_Stylization/PostForm.jsx";
import PostFilter from "../components/_PostFilter/PostFilter.jsx";
import Modal from "../components/UI/modal/Modal.jsx";
import MyButton from "../components/UI/button/MyButton.jsx";
import Loader from "../components/UI/loader/Loader.jsx";

import PostService from "../API/PostService.js";
import {usePosts} from "../hooks/usePosts.js";
import {useFetching} from "../hooks/useFetching.js";
import {getPageCount} from "../utils/pages.js";
import Pagination from "../components/UI/pagination/Pagination.jsx";
import {useObserver} from "../hooks/useObserver.js";
import Select from "../components/UI/select/Select.jsx";

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [posts2, setPosts2] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const lastElement = useRef()

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        fetchPosts()
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const removePost2 = (post2) => {
        setPosts2(posts2.filter(p => p.id !== post2.id))
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div style={{width: '800px'}}>
            {/*<MyButton onClick={fetchPosts}>Get Posts</MyButton>*/}
            <MyButton style={{marginTop: '10px'}} onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>
            <Modal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </Modal>
            <hr style={{margin: '15px'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <Select
            value={limit}
            onChange={value => setLimit(value)}
            defaultValue="Кол-во элементов на странице"
            options={[
                {
                    value: 5,
                    name: '5'
                },
                {
                    value: 10,
                    name: '10'
                },
                {
                    value: 25,
                    name: '25'
                },
                {
                    value: -1,
                    name: 'Показать всё'
                },
            ]}
            />
            {postError &&
                <h1>Ошибка... ${postError}</h1>
            }
            <PostsList remove={removePost} posts={sortedAndSearchedPosts} title='Посты про JS'/>
            <div ref={lastElement} style={{height: '20px', background: 'red'}}/>
            {isPostsLoading &&
                <div style={
                    {
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '100px'
                    }
                }>
                    <Loader/>
                </div>
            }
            {/*<Pagination*/}
            {/*    page={page}*/}
            {/*    changePage={changePage}*/}
            {/*    totalPages={totalPages}*/}
            {/*/>*/}
        </div>
    );
};

export default Posts;