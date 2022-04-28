import React from 'react';
import { createContext,useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext=createContext();

const AuthProvider = ({children}) => {
 const[token,setToken]=useState("");
 const [cart,setCart]=useState({});
 const [ver,setVer]=useState("");
 const navigate=useNavigate();

  const singleSearch=(id)=>{
      setVer(id);
    navigate("/singleProduct");
     
  }
    const AddtoCart=(item)=>{
        setCart({...item})
    }

 const signIn=async(email,password)=>{
   let res=await fetch("https://reqres.in/api/login",{
       method:"POST",
       headers:{"content-type":"application/json"},
       body:JSON.stringify({
         email:email,
         password:password,
       })
   })

   let data=await res.json();
   setToken(data.token);
   console.log(token);
}
  return (
    <AuthContext.Provider value={{token,signIn,cart,AddtoCart,ver,singleSearch}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;