import React from 'react'

export default function Header( props ) 
{

  console.log(props);

  return (
    <div className={props.class}>
      <p>To Do App</p>
    </div>
  )
}
