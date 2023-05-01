import React from 'react'

const CommentsItem = ({comm,index}) => {
  return (
    <div>
        <h3>{index}. {comm.email}</h3>
        <div>{comm.body}</div>
    </div>
  )
}

export default CommentsItem