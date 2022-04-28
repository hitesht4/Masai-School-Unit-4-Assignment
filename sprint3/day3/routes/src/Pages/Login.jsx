import React, { useEffect } from 'react';
import styles from '../Components/Products.module.css';
import { useContext ,useState} from 'react';
import {AuthContext} from '../context/AuthProvider'
import {useNavigate,useLocation} from 'react-router-dom';

const Login = () => {
   const[email,setEmail]=useState("");
   const[password,setPassword]=useState("");
   const {signIn,token}=useContext(AuthContext);
   const navigate=useNavigate();
   const location = useLocation();
   const from = location.state.from.pathname || "";

  useEffect(()=>{
     if(token){
         navigate(from,{replace:true})
     }
    },[token]);
  
  const handleSubmit=(e)=>{
     e.preventDefault(); 
      signIn(email,password);
  }
  return (
     
          <form className={styles.form} onSubmit={handleSubmit}>

            <label className={styles.label}>Email</label><br />
            <input 
             className={styles.Enter}
             type="text" 
             placeholder='Enter Email'
             onChange={()=>setEmail("eve.holt@reqres.in")}
             name="email"/><br />

            <label className={styles.label}>Password</label><br />
            <input  className={styles.Enter}
             type="password" 
             placeholder='Enter Password'
             onChange={()=>setPassword("cityslicka")}
             name="password"
             /><br />

            <input type="Submit" className={styles.Submit}/>

          </form>
        
  )
};

export default Login