import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { IncrementFunction,DecrementFunction,MultiplyFunction,DivideFunction,settting } from '../store/actions';
import styled from 'styled-components';

const Btn=styled.button`
padding:10px;
background:black;
border:none;
color:white;
margin:20px;
width:100px;
`;
const Count=styled.h1`
color:green;
font-size:50px;
`;
const Payload=styled.input`
padding:8px;

`;



const Counter = () => {
const [val,setval]=useState("");
const count=useSelector((state)=>state.count);
const dispatch=useDispatch();
  return (
    <div>
        <div><Count >{count}</Count></div>
        <div>
            <Payload type="number" onChange={(e)=>setval(e.target.value)}/>
        </div>
        <div>
            <Btn onClick={()=>dispatch(IncrementFunction(1))}>Increment</Btn>
            <Btn onClick={()=>dispatch(DecrementFunction(1))}>Decrement</Btn>
            <Btn onClick={()=>dispatch(IncrementFunction(Number(val)))}>Add x</Btn>
            <Btn onClick={()=>dispatch(DecrementFunction(Number(val)))}>Substract x</Btn>
            <Btn onClick={()=>dispatch(MultiplyFunction(Number(val)))}>Multiply x</Btn>
            <Btn onClick={()=>dispatch(DivideFunction(Number(val)))}> Divide x</Btn>
        </div>
        
    </div>
  )
}

export default Counter