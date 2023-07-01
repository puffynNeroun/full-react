import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching.js";
import PostService from "../API/PostService.js";
import Loader from "../components/UI/loader/Loader.jsx";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data);
    })
    const [fetchComments, isComLoading, comError] = useFetching(async () => {
        const response = await PostService.getCommentsByPost(params.id)
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById()
        fetchComments()
    }, [])

    return (
        <div>
            <h1>Вы попали на страницу поста с ID = {params.id}</h1>
            <hr style={
                {
                    margin: '20px 0'
                }
            }/>
            {isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>
            }
            <h2 style={
                {
                    margin: '20px 0'
                }
            }>Коментарии</h2>
            {isComLoading
                ? <Loader/>
                :
                <div>
                    {comments.map(comment =>
                        <div key={comment.id}>
                            <h4>{comment.email}</h4>
                            <div style={
                                {
                                    marginBottom: '10px'
                                }
                            }>{comment.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;