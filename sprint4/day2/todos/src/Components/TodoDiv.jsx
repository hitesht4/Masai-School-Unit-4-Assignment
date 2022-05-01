import React from 'react';
import { Delete_Todos } from '../Store/actions';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';


const TodoItem=styled.div`
color:${(props)=>props.variant?"green":"red"};
`;
const Del=styled.button`
color:white;
border:none;
background:black;
`;

const TodoDiv = ({id,value,status}) => {
  const dispatch=useDispatch();

  const handleDelete=()=>{
    Delete_Todos(dispatch,id);
  }
  return (
    <TodoItem variant={status}
    style={{display:"flex", gap:"30px",width:"150px",justifyContent:"space-around",margin:"auto"}}>
        <h3 key={id}>{value}</h3>
        <Del style={{height:"20px",margin:"20px"}} onClick={handleDelete}>Delete</Del>
    </TodoItem>
  )
}

export default TodoDiv