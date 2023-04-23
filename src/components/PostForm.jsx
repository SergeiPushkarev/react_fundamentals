import React, {useState} from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const PostForm = ({create}) => {
  const [oneNewPost, setOneNewPost] = useState({title:'', descr:''})

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...oneNewPost,
      id: Date.now()
    }
    create(newPost);
    setOneNewPost({title:'', descr:''})
  }

  return (
    <div>
        <form action="">
        <MyInput 
          type="text" 
          placeholder="Название поста" 
          value = {oneNewPost.title}
          onChange = {e=> setOneNewPost({...oneNewPost, title: e.target.value})} 
          />
        <MyInput 
          type="text" 
          placeholder="Описание поста"
          value = {oneNewPost.descr}
          onChange = {a=>setOneNewPost({...oneNewPost, descr: a.target.value})}
          />
        <MyButton onClick = {addNewPost}>Создать пост</MyButton>
      </form>
    </div>
  )
}

export default PostForm