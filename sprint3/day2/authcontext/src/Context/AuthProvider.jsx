import React from 'react';
import { createContext } from 'react';
import {useState} from 'react';


export const AuthContext=createContext();

const AuthProvider = ({children}) => {
const [isAuth , setIsAuth]=useState(false);

const toggleAuth=()=>{
 setIsAuth(!isAuth);
}

  return (
    <AuthContext.Provider value={{isAuth,setIsAuth,toggleAuth}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider