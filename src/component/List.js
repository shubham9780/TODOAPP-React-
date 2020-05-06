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
            &nbsp;
              <Button onClick={ deleteTodo(index) }>
                  Delete
              </Button>
            
            </li>
          })
        }
      </ul>
    </div>
  )
}
