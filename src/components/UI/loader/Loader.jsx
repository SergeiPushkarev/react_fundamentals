import React from 'react'
import st from "./loader.module.css";

const Loader = () => {
  return (
    <div className={st.container} >
        <div className={st.spinner}></div>
    </div>
  )
}
export default Loader