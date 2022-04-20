import React,{useState} from 'react';
import styles from './styles.module.css';
import {nanoid} from 'nanoid';
import Card from './Card'



const Todo =()=>{
    const [task,setTask]=useState("");
    const [todo,setTodo]=useState([]);

    const handleChange=(e)=>{
        setTask(e.target.value);
        console.log(e.target.value);
    }
    const handleClick=()=>{
        let taskObj={
            title:task,
            status:false,
            id:nanoid(),
        }
        console.log(taskObj);

        setTodo([...todo,taskObj])
        console.log(todo);
    }
    return(
        <>
        <div className={styles.input_div}>
        <input onChange={handleChange} type="text" placeholder='Write Something'/>
        <button onClick={handleClick}>+</button>
        </div>
       
        {todo.map(item=>{
          return (
              <>
              <Card title={item.title} id={item.id} status={item.status}/>
              </>
          )
        })}
        </>
    )
}
export default Todo;