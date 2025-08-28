import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Todo({task,togglercomplete,deltlist,setEdit}) {
    
  return (
    <div className="todo">
      <p onClick={()=>togglercomplete(task.id)} 
      className={`${task.completed ? 'completed':'incompleted'}`}>{task.task}</p>
    <div>
     <FontAwesomeIcon className='editbtn' icon={faPenToSquare} onClick={()=>setEdit(task)} />
       <FontAwesomeIcon className="delbtn" icon={faTrash} onClick={()=>deltlist(task.id)} />
    </div>
    </div>
  )
}

export default Todo
