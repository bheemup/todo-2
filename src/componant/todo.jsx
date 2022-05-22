   
    import React from "react";
    import { useState } from "react";
   import "./todolist.css";
   import {v4} from "uuid";
  
     export default function Todo(){
         const [todoitem, setTodoitem]= useState([]);
          let [news,setNews]=useState("");
        let handle=(e)=>{
           setNews(e.target.value);
        }
         
      
     return ( 
           <>
          <h1>Todo App</h1>
          <input onChange={handle} type="text" placeholder="Enter your Task" />
          <button className="add" onClick={()=>{
             setTodoitem([
                 ...todoitem,{id:Date.now(),value:news}
  
             ])
            
          console.log(todoitem)
            
          }} 
          >
              Add Task</button>
              {    todoitem.map((el)=>(
             <div  className="list-container">
                  <div  key={v4()} className="list">{el.value}</div>
                  <button onClick={(e)=>{
                       console.log(e.target.key)
                       setTodoitem(todoitem.filter((todo)=>todo.key !== e.target.key))
                  }}>Delet</button>
             </div>
          ))}
       
         </>
         )
      }