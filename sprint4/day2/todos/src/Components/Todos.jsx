import React, { useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoDiv from './TodoDiv';
import {useDispatch, useSelector} from 'react-redux';
import { getTodos } from '../Store/actions';



const Todos = () => {

    const todos=useSelector((state)=>state.todos);
    const dispatch=useDispatch();

    useEffect(()=>{
      getTodos(dispatch);
    },[]);


  return (
    <div>
        <div><TodoInput/></div>
        <div>
        
         {todos.map(item=>
             <TodoDiv id={item.id} value={item.value} status={item.status}/>
         )}
        
        </div>
    </div>
  )
}

export default Todos