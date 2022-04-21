import React,{useState} from 'react'
import styles from './Timer.module.css';

const Main = () => {
    const [start,setStart]=useState();
    const [end,setEnd]=useState();

    const handleChange=(e)=>{
         setStart(Number(e.target.value));
    }
     const handleEnd=(e)=>{
         setEnd(Number(e.target.value));
    }
    const startTimer=()=>{
        if(end!="" && start!="")
    {
      const s= setInterval(()=>{   
        setStart(function(prevState){
        if(prevState===end){
          clearTimeout(s);
          return prevState;
        }
        else{
            return Number(prevState+1);
        }
                   
    })
        
        },1000)
      }
  
    }
  return (
      <>
    <div>
        <h1>{start}</h1>
    </div>
    <div>
    <input type="Number" placeholder='Enter Start Time' onChange={handleChange} />
    <input type="number" placeholder='Enter End Time' onChange={handleEnd}/>
    <button onClick={startTimer}>Start Timer</button>
    </div>

    </>
  )
}

export default Main