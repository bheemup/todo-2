import React from 'react'
import Todolist from './Todolist'
import { useState } from 'react'
import {v4 as uuid} from "uuid"
import styles from "./styles.module.css"
 
const TODO = () => {
    const [value, setvalue] = useState("")

    const [todos,setTodo]=useState([])
    
    
    const handleChange=()=>{
    
    const data={
    id:uuid(),
    title:value,
  
    
    }
    
    setTodo([...todos,data])
    
    }
    

    const handleDelete=(id)=>{
        let updatedtodo=todos.filter((item)=> item.id!== id)
        setTodo(updatedtodo)
    }
    
    
    
    
    
    
      return (
        <div className={styles.bgscreen}>
   
    <div className={styles.tododiv}>
    <h1 className={styles.todoheading}>Todo List</h1>
          <input className={styles.todoinput} type="text" value={value} onChange={(e)=>setvalue(e.target.value)}placeholder="Write Something"/>
          <button className={styles.todobutton} onClick={handleChange}>+</button>

{todos.map((data)=>(
    <Todolist key={data.id} {...data} handleDelete={handleDelete} title={data.title} id={data.id}/>
))}

        
        </div>
        </div>
      );
    }
    
export default TODO