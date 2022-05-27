import React from 'react'
import Todoitem from "./Todoitem"

import styles from "./styles.module.css"

const Todolist = ({title,handleDelete,todos,id}) => {

   
  return (
    <div className={styles.todolistdiv}>


      
     
            <Todoitem title={title} handleDelete={handleDelete}id={id}/>
          
       
       
    </div>
  )
}

export default Todolist