import React from 'react'

import Button from './Button';


export default function List(props) 
{
  const { todo, deleteTodo } = props;

  return (
    <div className="task_container">
      <ul>
        {
          todo.map((task, index)=>
          {
            return <li  key={index}>
              
              {task} 
            
              <Button onClick={ deleteTodo(index) }>
                  X
              </Button>
            
            </li>
          })
        }
      </ul>
    </div>
  )
}
