import React, { children } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useContext } from 'react';
import {Navigate,useLocation} from 'react-router-dom';

const RequiredAuth = ({children}) => {
    const {token}=useContext(AuthContext);
    const location=useLocation();

    if(token){
      return children;
    }
        
    else{
      return <Navigate to="/Login" state={{from:location}}replace/>
    }
    
}

 export default RequiredAuth;
