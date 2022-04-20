import React from 'react';
import {useState} from 'react';
import views from './styles.module.css';


const Counter=()=>{
    const [counter,setCounter]=useState(0);
    const handleInc=(value)=>{
        setCounter(counter+value);
    }
    const handleDec=(value)=>{
        setCounter(counter-value);
    }
    const handleDouble=()=>{
        setCounter(counter*2);
    }
    return (
        <>
        <h1 className={views.Counter}>Counter</h1>
        <h1 className={views.Counter}>{counter}</h1>
        <button className={views.btn} onClick={()=>handleInc(1)}>Increase</button>
        <button className={views.btn} onClick={()=>handleDec(1)}>Decrease</button>
        <button className={views.btn} onClick ={()=>handleDouble()}>Double</button>
        </>
    )
}
export default Counter;