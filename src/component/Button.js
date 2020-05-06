import React from 'react'

import styles from './style.module.css';

export default function Button(props) 
{
  const { children, className , ...rest } = props;


  return (
    <button className={styles.button}  {...rest}>
      {
        children
      }
    </button>
  )
}
