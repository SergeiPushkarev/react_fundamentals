import React, {useState, useEffect, useRef } from "react";
import PostService from "../API/PostService";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/loader/Loader";
import MyModal from "../components/UI/modal/MyModal";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePosts";
import { getTotalPages } from "../utils/totalPages";
import {useObserver} from '../hooks/useObserver'
function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sorted:'', searched:''})
    const [modal, setModal] = useState(false)
    const [totalPage, setTotalPage] = useState(0)
    const [limitPage, setLimitPage] = useState(10)
    const [page, setPage] = useState(1)
    const lastElementPost = useRef()
  
  
    const [recivedResp, isLoading, fetchError] = useFetching(async (limitPage,page)=>{
      const postsResp = await PostService.getAllPosts(limitPage,page);
      setPosts([...posts, ...postsResp.data])
      const total = postsResp.headers['x-total-count']
      setTotalPage(getTotalPages(total, limitPage))
    })

    useObserver(lastElementPost, isLoading, page<totalPage, ()=>{setPage(page+1)})
  
    useEffect(() => {
      recivedResp(limitPage,page)
    }, [page])
  
    const createOneNewPost = (newPost) => {
      setPosts([...posts, newPost])
      setModal(false)
    }
  
    const deletePost = (post) => {
      setPosts(posts.filter(a=> a.id !== post.id))
    }
  
    const sortedAndSearhedPosts = usePosts(posts, filter.sorted, filter.searched)
    
  
    return (
      <div className="App">
        <MyButton onClick = {()=> setModal(true)}>
          Создать пост
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create = {createOneNewPost}/>
        </MyModal>
        <hr style={{margin:"15px 0"}}/>
        <PostFilter filter={filter} setFilter={setFilter} />
        {fetchError &&
          <h1 style={{textAlign:'center', color:"red"}}>Произошла ошибка ${fetchError}</h1>
        }
        <PostList post={sortedAndSearhedPosts} title = "Список постов 1" deletePost = {deletePost} />
        <div ref={lastElementPost}></div>
        {isLoading && <Loader/>}
        {/* <Pagination total={totalPage} page={page} changePage={changePage}></Pagination> */}
      </div>
    );
}

export default Posts