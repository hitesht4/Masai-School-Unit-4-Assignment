import {DELETE_Todos, GET_Todos,POST_Todos} from './actionTypes';
import axios from 'axios';


  export  const getTodos=async(dispatch)=>{

        let r=await axios.get("http://localhost:3005/todos")
        let d=await r.data;   
        dispatch({
            type:GET_Todos,
            payload:d,
        })
    }

   export  const Delete_Todos= async(dispatch,id)=>{

       let r =await axios.delete(`http://localhost:3005/todos/${id}`); 

       dispatch({
           type:DELETE_Todos,
           payload:id,
       })
    };


   export  const post_Todos= async(dispatch,formdata)=>{
       let r =await fetch("http://localhost:3005/todos",{
           method:"POST",
           headers:{"content-type":"application/json"},
           body:JSON.stringify({
               ...formdata
           })
       }); 
       let d= await r.json();
            dispatch({
            type:POST_Todos,
            payload:d,
        })
        // getTodos();
    };

