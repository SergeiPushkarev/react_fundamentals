import React from 'react'
import MyButton from './UI/button/MyButton'

const PostItem = (props) => {
  const deletePost = () => {
    props.deletePost(props.a)
  }
  return (
    <div className="post">
        <div className="post__content">
            <strong>{props.a.id}. {props.a.title}</strong>
            <div>
                {props.a.body}
            </div>
        </div>
        <div className="post__btn">
            <MyButton to={'/posts/'+ props.a.id} >Open</MyButton>   
        </div>
        <div className="post__btn">
            <MyButton onClick = {deletePost} >Delete</MyButton>   
        </div>
    </div>
  )
}

export default PostItem
