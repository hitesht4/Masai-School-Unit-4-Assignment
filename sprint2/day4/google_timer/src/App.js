import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Stopwatch from './Components/StopWatch';
import Timer from './Components/Timer'
import styles from './Components/timer.module.css';

function App() {
   const[timer,setTimer]=useState(true);
   const[watch,setWatch]=useState(false);
   const handleStop=()=>{
       setWatch(true);
       setTimer(false);
   }
   const handleTimer=()=>{
       setTimer(true);
       setWatch(false);
   }
  return (
    <div className="App">
      <h1>Google Timer</h1>
      <p style={{color:"red"}}> *Click on time to enter the Time*</p>
     <div className={styles.container}>
        <div className={styles.stop}>
        <div onClick={handleTimer}><h3>⏳Timer</h3></div>
        <div onClick={handleStop}><h3>⏱Stopwatch</h3></div>    
    </div>
     {timer?<Timer/>:<Stopwatch/>}
       
     </div>
    </div>
  );
}

export default App;
