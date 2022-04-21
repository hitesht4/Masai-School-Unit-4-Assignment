import React from 'react';
import styles from './Task.module.css';


const Task=(props)=>{
  return (
      <>
      <div key={props.id} className={styles.flex}>
          <h3 >{props.task}</h3>
      </div>
      </>
  )
}
export default Task;