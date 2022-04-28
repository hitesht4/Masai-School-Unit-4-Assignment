import React from 'react';
import {createContext, useState} from 'react';


export const ThemeContext=createContext();

const ThemeProvider = ({children}) => {

    const[theme,setTheme]=useState(false);

    const changeTheme=()=>{
        setTheme(!theme);
    }
  return (
    <ThemeContext.Provider value={{theme,setTheme,changeTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider