import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MyButton.module.css'


const MyButton = ({children, to, selected, ...props}) => {
  const rootClasses = [classes.myBtn]
  if (selected) {
    rootClasses.push(classes.selected)
  }
  return (
    <Link to={to}>
      <button {...props} className={rootClasses.join(' ')}>
          {children}
      </button>
    </Link>
  )
}

export default MyButton