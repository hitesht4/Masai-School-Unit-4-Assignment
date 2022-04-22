import React,{useState,useEffect} from 'react';
import styles from './timer.module.css';

const Timer = () => {
  const [time, setTime] = useState(10);
  const [timerOn, setTimerOn] = useState(false);
  const [showInput,setShowInput]=useState(false);


const handleInput=()=>{
    if(timerOn===false){
       setShowInput(true);
    }
}

const handleChange=(e)=>{
      setTime(Number(e.target.value))
}
   useEffect(() => {
    let interval = null;
    setShowInput(false);

    if (timerOn) {
      interval = setInterval(() => {
        setTime(function(prevTime){
      if(prevTime===0){
          clearTimeout(interval);
          setTimerOn(false);
          return prevTime;
        }
        else{
            return prevTime-1;
        }
    } 
 
    );
      
      }, 1000);
    } 

    else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);


  
  return (
    <>
    <div className={styles.stopwatch}>

      {showInput?<input 
      placeholder='Seconds'
      type="Number"
      onChange={handleChange} />
      :<h1 onClick={handleInput}>{time}<span>Sec</span></h1>}
     
    </div>

        <button 
        onClick={()=>setTimerOn(!timerOn)}
        className={timerOn?styles.one:""}>
          {timerOn?"Stop":"Start"}
        </button>

        <button onClick={()=>setTime(0)}>Reset</button>
    </>
  );

}




 
  

export default Timer;



//  useEffect(()=>{
//   const id=setInterval(()=>{
//     setTime(function(prev){
//         if(prev===0){
//           clearInterval(id);
//           return prev;
//         }
//           return prev-1;
//     });
      
//   },1000)
//  },[]);