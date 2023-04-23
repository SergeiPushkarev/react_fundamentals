import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from './PostItem';

const PostList = ({post, title, deletePost}) => {
  if (!post.length) {
    return (<h1 style = {{textAlign:"center"}}>
    Посты не найдены!
  </h1>)
  } else  return (
    <div>
        <h1 style={{textAlign:'center'}}>{title}</h1>
        <TransitionGroup>
        {post.map((e, index) =>
          <CSSTransition
            key={e.id}
            timeout={500}
            classNames="post"
          >
            <PostItem deletePost = {deletePost} a = {e} number = {index +1} />
          </CSSTransition>
        )}
        </TransitionGroup>
    </div>
  )
}

export default PostList