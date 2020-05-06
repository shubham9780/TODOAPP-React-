import React from 'react'

import Button from './Button';

export default function InputTodo(props)
{
  const {
    value,
    onChange,
    onSubmit,
    button_title
  } = props;

  return (
    <div className="action_container">
      <input style={{padding:"12px 20px",border:"2px solid red",borderRadius:"8px", margin:"10px auto"}} value={value} onChange={onChange} placeholder="Type here ..."/>
      
      <Button onClick={onSubmit} >
        { button_title }
      </Button>
      
    </div>
  )
}
