import React from 'react';

import './App.css';

//let input_value = "hello";
class App extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  state = {
    value:"",
    todo:["apple","banana","p"]
  }

  clicked = ()=>
  {
    const { value, todo } = this.state;
    
    todo.push(value);

    this.setState( { todo , value:"" } );
    
  }

  dltItem(i)
  {
     var newitem=this.state.todo;
    delete newitem[i];
     this.setState({todo:newitem});
  }

  onInputChange = (event)=>
  {
    const value = event.target.value;
     
    this.setState({ value });
  }


  render()
  {
    const  { value, todo } = this.state;



    return (
      <>
          <div className="header">
            <p>To Do App</p>
          </div>
          <div className="action_container">
            <input value={value} onChange={this.onInputChange} placeholder="Type here ..."/>
            <button onClick={this.clicked}>
              save
            </button>
          </div>
          <div className="task_container">
            <ul>
              {
                todo.map((task, index)=>
                {
                  return <li key={index}>
                    <input type="checkbox" style={{fontSize:'x-large'}}/>
                    {task}
                  <br/>
                      <button onClick={this.dltItem.bind(this,index)}>Delete</button>
                  
                  </li>
                })
              }
            </ul>
          </div>
      </>
    );
  }
}



export default App;
  //state = {
//s
// function App() {
//   return (
//    <>
//         <div className="header">
//      <p>TO DO APP</p>
//    </div>
//    <div className="action_container">
//      <input placeholder="Type here.."></input>
//      <button onClick={clicked}>
//      {
//        button_inner_html
//      }
//      </button>
//    </div>
//    <div className="tast_container">
//      <ul ></ul>
//          </div>
//    </>
//   );
// }
// function clicked()
// {
//   alert("button clicked");
// }
//export default App;
