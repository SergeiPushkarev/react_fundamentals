import React from 'react'
import MyButton from '../button/MyButton'
import { usePagination } from "../../../hooks/usePagination";
import style from "./Pagination.module.css";

const Pagination = ({total, page, changePage}) => {
    let pagesArray = usePagination(total) 
  return (
    <div className={style.page__wrapper}>
        {pagesArray.map(p=>
            <MyButton key={p} selected={page === p ? true : false} onClick={()=>changePage(p)}>{p}</MyButton>
          )
        }
    </div>
  )
}

export default Pagination