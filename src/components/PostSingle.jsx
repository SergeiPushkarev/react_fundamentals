import React from 'react';
import { useParams } from 'react-router-dom'
import MyButton from './UI/button/MyButton'
import PostService from "../API/PostService"
import { useFetching } from "../hooks/useFetching"
import { useState, useEffect } from 'react'
import Loader from './UI/loader/Loader';
import Comments from './UI/comments/Comments';

const PostSingle = () => {
    const {id} = useParams()
    const [post, setPost] = useState({})
    
    const [fetchPostById, isLoading, fetchError] = useFetching(async ()=>{
      const post = await PostService.getPost(id);
      console.log(post.data);
      setPost(post.data)
    })

    useEffect(() => {
      fetchPostById()
    }, [])
    

  return (
    <div className='post__single'>
        <div className='single__navbar'>
          <MyButton to={'/posts'} >
              Back to Posts
          </MyButton>
        </div>
        {fetchError &&
          <div>
            <h1 style={{textAlign:'center', color:"red"}}>Произошла ошибка ${fetchError}</h1>
            <h2 style={{textAlign:'center'}}>Пост не найден!</h2>
          </div>
        }
        {isLoading
          ? <Loader/>
          : <div className='single__wrap'>
                <h1 className='single__head'>{post.title}</h1>
                <div className='single__body'>
                  {post.body}
                </div>
                <Comments id={id}/>
            </div>
        }
    </div>
  )
}

export default PostSingle