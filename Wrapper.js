import React, { use } from 'react'
import Form from './Form' 
import Todo from './Todo'
import '../App.css'
import { useState } from 'react'

function Wrapper() {
  const[todos,setTodos]=useState([])
  const[edittodo,setEdit]=useState(null)
  const Addlist=(todo)=>{
    if(todo.trim()==="")return;
   
    if(edittodo){
      setTodos(todos.map((to)=>to.id===edittodo.id ?{...to,task:todo}:to))
      setEdit(null);
    }else{
       setTodos([...todos, { id: Date.now(), task: todo, completed: false }]);
  } 
}
  const toggler=id=>{
     setTodos(todos.map(todo=>todo.id===id ?
      {...todo,completed:!todo.completed}
      :todo)
      
    )
  }
  const deltlist=id=>{
     setTodos(todos.filter(todo=>todo.id!==id))
  }

  return (
    <div className='wrapper-div'>
      <Form  Addlist={Addlist} editTodo={edittodo}/>
      {todos.map((task)=>
        <Todo task={task} id={task.id} togglercomplete={toggler} deltlist={deltlist} setEdit={setEdit}/>
      )
    }
    </div>
  )
}

export default Wrapper
