import React from 'react';
import classes from './MyButton.module.css'


const MyButton = ({children, ...props}) => {
  // const rootClasses = [classes.myBtn]
  // if (selected) {
  //   rootClasses.push(classes.selected)
  // }
  return (
    <button {...props} className={classes.myBtn}>
        {children}
    </button>
  )
}

export default MyButton