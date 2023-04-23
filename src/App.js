import React, {useState, useEffect} from "react";
import PostService from "./API/PostService";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import Loader from "./components/UI/loader/Loader";
import MyModal from "./components/UI/modal/MyModal";
import { useFetching } from "./hooks/useFetching";
import { usePagination } from "./hooks/usePagination";
import { usePosts } from "./hooks/usePosts";
import './styles/App.css'
import { getTotalPages } from "./utils/totalPages";


function App() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sorted:'', searched:''})
  const [modal, setModal] = useState(false)
  const [totalPage, setTotalPage] = useState(0)
  const [limitPage, setLimitPage] = useState(8)
  const [page, setPage] = useState(1)
  // const [selectedPage, setSelectedPage] = useState(false)

  let pagesArray = usePagination(totalPage) 


  const [recivedResp, isLoading, fetchError] = useFetching(async ()=>{
    const posts = await PostService.getAllPosts(limitPage,page);
    setPosts(posts.data)
    const total = posts.headers['x-total-count']
    setTotalPage(getTotalPages(total, limitPage))
  })

  console.log(totalPage, pagesArray)

  useEffect(() => {
    recivedResp()
  }, [])

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
      <div className="page__wrapper">
        {pagesArray.map(p=>
            <span key={p} className={page === p ? 'page page__selected' : 'page'} onClick={()=>setPage(p)}>{p}</span>
          )
        }
      </div>
    </div>
  );
}

export default App;