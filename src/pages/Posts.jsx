import React, {useState, useEffect} from "react";
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
import Pagination from "../components/UI/pagination/Pagination";
function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sorted:'', searched:''})
    const [modal, setModal] = useState(false)
    const [totalPage, setTotalPage] = useState(0)
    const [limitPage, setLimitPage] = useState(9)
    const [page, setPage] = useState(1)
  
  
    const [recivedResp, isLoading, fetchError] = useFetching(async (limitPage,page)=>{
      const posts = await PostService.getAllPosts(limitPage,page);
      setPosts(posts.data)
      const total = posts.headers['x-total-count']
      setTotalPage(getTotalPages(total, limitPage))
    })
  
    useEffect(() => {
      recivedResp(limitPage,page)
    }, [page])
  
    const changePage = (page)=>{
      setPage(page)
    }
  
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
        {isLoading
          ? <Loader/>
          : <PostList post={sortedAndSearhedPosts} title = "Список постов 1" deletePost = {deletePost} />
        }
        <Pagination total={totalPage} page={page} changePage={changePage}></Pagination>
      </div>
    );
}

export default Posts