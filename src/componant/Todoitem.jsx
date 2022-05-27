import React from 'react'
import styles from "./styles.module.css"

const Todoitem = ({title,handleDelete,id}) => {


    const handleDeletefn=()=>{

       
        handleDelete(id)
            }
        

  return (
    <div className={styles.todoitemdiv}>

       <span className={styles.todoitemspan}>
                <input className={styles.todoiteminput} type="radio" />
        <span className={styles.todoitemtitle} >{title}</span>
        </span>
         <button className={styles.todoitembutton}  onClick={handleDeletefn}>Delete</button>
         </div>
  )
}

export default Todoitem