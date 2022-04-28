import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeProvider';

const Side=styled.div`
width:50px;
height:auto;
display:flex;
flex-direction:column;
padding:10px;
background-color:white;
background-color:${(props)=> props.variant?"black":"#f5f6fa"};
gap:5px;
`;
const Part=styled.div`
 height:10%;
 width:100%;
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
 text-align:center;
 padding-top:10px;
 border-radius:10px;
 background-color:${(props)=> props.variant?"#1f2327":"#f5f6fa"};
 color:${(props)=> props.variant?"white":"black"};
`;
const Gap=styled.div`
 height:30%;
`;

const Sidebar = () => {
  const {theme}=useContext(ThemeContext);
  console.log(theme);
  return (
    <Side variant={theme}>
       <Gap></Gap> 
        <Part style={{backgroundColor:"#5b8ef3",padding:"8px"}}>A</Part>
        <Part variant={theme}>B</Part>
        <Part variant={theme}>C</Part>
        <Part variant={theme}>D</Part>
        <Part variant={theme}>E</Part>
       <Gap></Gap>
    </Side>
  )
}

export default Sidebar