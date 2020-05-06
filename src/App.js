import React from 'react';

import styles from './App.module.css';

import Header from './component/Header';
import InputTodo from './component/Input';
import List from './component/List';

class App extends React.Component
{
  constructor(props)
  {
    super(props);

  }

  state = {
    value:"",
    todo:[]
  }

  componentDidMount()
  {
   
    setTimeout(()=>
    {
      this.setState({ todo:[1,2,3,4,5,6,7,8] })
    },100);
  }

  clicked = ()=>
  {
    const { value, todo } = this.state;

    todo.push(value);

    this.setState( { todo , value:"" } );
    
  }

  onInputChange = (event)=>
  {
    const value = event.target.value;

    this.setState({ value });
  }

  deleteTodo = (id)=>
  {
    return ()=>
    {
      const { todo } = this.state;

      todo.splice(id, 1);

      this.setState({ todo });
    }

  }

  render()
  {
    const  { value, todo } = this.state;

    return (
      <>
          <Header  class={styles.header}  id="random id" />
          <InputTodo value={value} button_title="save" onChange={this.onInputChange} onSubmit={this.clicked}/>
          <List  todo={ todo } deleteTodo={this.deleteTodo} />
      </> 
    )
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
