import React from 'react'
import { useState,useEffect} from 'react'
function Form({Addlist,editTodo}) {
    const[Todo,setTodo]=useState('');
    useEffect(()=>{
        if(editTodo){
          setTodo(editTodo.task)
        }
      },[editTodo])
    const handler=e=>{
      e.preventDefault()
      Addlist(Todo)
      setTodo('')
    }
  return (
    <div>
      <form onSubmit={handler}>
        <h1>Get Things Done</h1>
        <input type="text"
         placeholder='add your Task' 
          value={Todo}
         onChange={(e)=>setTodo(e.target.value)
         
         }
        />
        <button type='submit'>{editTodo? "Update" : "Add Task" }</button>
        
      </form>
    </div>
  )
}

export default Form
