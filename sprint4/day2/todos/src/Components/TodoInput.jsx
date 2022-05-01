import React, { useState } from 'react';
import {nanoid} from 'nanoid';
import { post_Todos } from '../Store/actions';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';



const TodoItem=styled.div`

`;
const Del=styled.button`
color:white;
border:none;
background:black;
padding:5px;
`;

const TodoInput = () => {
  const [input, setInput]=useState("");
  const dispatch=useDispatch();
 
  const handleTodo=()=>{
    let formdata={
    value:input,
    status:false,
  }
    post_Todos(dispatch,formdata)
  }

  return (
    <div >
    <input type="text" onChange={(e)=>setInput(e.target.value)} style={{padding:"5px"}}/>
    <Del onClick={handleTodo}>Add Todo</Del>
    </div>
  )
}

export default TodoInput;