import React from 'react';
import Login from './Login';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const Body = () => {
    const {isAuth}=useContext(AuthContext);
   
  return (
    <div>
      {isAuth?<h1 style={{color:"#cb2027"}}>HOME</h1>:<Login/>}
       
          
    </div>
  )
}

export default Body