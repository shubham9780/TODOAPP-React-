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
      <input value={value} onChange={onChange} placeholder="Type here ..."/>
      
      <Button onClick={onSubmit} >
        { button_title }
      </Button>
      
    </div>
  )
}
