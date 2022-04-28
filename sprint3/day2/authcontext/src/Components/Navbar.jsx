import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import styled from 'styled-components';

const NavDiv=styled.div`
background-color:#ffa500;
padding;20px;
display:flex;
justify-Contents:space-between;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
text-align:center;
`;
const Btn =styled.button`
padding:10px;
width:200px;
margin:30px 200px;
background-color:#cb2027;
border:none;
color:white;
font-weight:bold;
`;
const Gap =styled.div`
width:60%;
`;

const Navbar = () => {
    const {isAuth ,setAuth}=useContext(AuthContext);
    const {toggleAuth}=useContext(AuthContext);
    console.log(isAuth);
  return (
    <NavDiv>
       <div style={{width:"20%"}}> <h1>Navbar</h1></div>
        <Gap></Gap>
        <div><Btn onClick={toggleAuth}>{isAuth?"Logout":"Login"}</Btn></div>
        
    </NavDiv>
  )
}

export default Navbar;