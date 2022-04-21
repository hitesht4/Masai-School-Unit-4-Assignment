import React,{useState,useEffect} from 'react';
import Task from './Task';
import styles from './Task.module.css';

const AllTasks=()=>{
    const[task,setTask]=useState("");
    const[Todo,setTodo]=useState([]);
    const[pageNumber,setPageNumber]=useState(1);

    const getTodos=async()=>{
      
        let res=await fetch(`http://localhost:3004/data/?_page=${pageNumber}`);
        console.log(res);
        let data=await res.json();
        console.log(data);
        setTodo(data);
  
    };

    const PostItems=async()=>{
        let res=await fetch("http://localhost:3004/data/",{
            method:"POST",
            headers:{"content-Type":"Application/json"},
            body:JSON.stringify({
                task:task,
                status:false,
            }),
        });
        let data=await res.json();
        console.log(data);
        handleTask(data);
    }
    useEffect(()=>{
         getTodos();
    },[pageNumber])

    const handleChange=(e)=>{
        setTask(e.target.value);
    }

    const handleTask=(data)=>{
        setTodo([...Todo,data])
    }
    const Incpage=(value)=>{
       setPageNumber(pageNumber+value);
        
        console.log(pageNumber);
    }
    const decpage=(value)=>{
        if(pageNumber>1){
           setPageNumber(pageNumber-value);
        }
        
        console.log(pageNumber);
    }


    return (
        <>
        <input type="text" onChange={handleChange}/>
        <button className={styles.Add} onClick={PostItems}>Save</button>
        {Todo.map(item=>{
          return (
              <>
              <Task task={item.task} Key={item.id} status={item.status}/>
              </>
          )
        })}
         <div>
        <button onClick={()=>decpage(1)}>Previous</button>
        <button onClick={()=>Incpage(1)}>Next</button>
        </div>
        </> 

    )
}

export default AllTasks;




