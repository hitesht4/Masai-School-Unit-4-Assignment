import React,{useState,useEffect} from 'react';
import styles from './timer.module.css';

const StopWatch = () => {
     const [time, setTime] = useState(0);
     const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <>
    <div className={styles.stopwatch}>
        <h1>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</h1>
        <h1>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</h1>
        <h1>{("0" + ((time / 10) % 100)).slice(-2)}</h1>
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

export default StopWatch