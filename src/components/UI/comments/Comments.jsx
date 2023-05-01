import React,{useState} from 'react'
import MyButton from '../button/MyButton'
import { useFetching } from '../../../hooks/useFetching'
import PostService from '../../../API/PostService'
import Loader from '../loader/Loader'
import CommentsItem from './CommentsItem'
import style from "./Comments.module.css";

const Comments = ({id}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [comments, setComments] = useState([])
    const [fetchComm, isLoading, error] = useFetching(async () =>{
        const res = await PostService.getCommById(id);
        console.log(res.data);
        setComments(res.data)
    })

    const rootClasses = [style.container]
    if (isOpen) {
        rootClasses.push(style.open)
    }
    const toggleComments = ()=>{
        fetchComm()
        setIsOpen(!isOpen)
    }

  return (
    <div>
        <MyButton onClick={()=>toggleComments()}>Показать комментарии </MyButton>
        <div className={rootClasses.join(" ")}>
            {isLoading
                ? <Loader/>
                : comments.map((c,index)=>
                    <CommentsItem key={c.id}comm={c} index={index+1}/>
                )
            }
        </div>
    </div>
  )
}

export default Comments