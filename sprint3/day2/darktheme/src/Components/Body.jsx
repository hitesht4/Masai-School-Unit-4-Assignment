import React from 'react';
import Sidebar from './Sidebar';
import AllCards from './Allcards';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeProvider';



const Nav=styled.div`
height:100%;
width:100%;
padding:10px;
display:flex;
background-color:${(props)=> props.variant?"#1f2327":"#f5f6fa"};
`;

const Body = () => {
const {theme}=useContext(ThemeContext);
  console.log(theme);
  return (
    <Nav  variant={theme} style={{display:"flex"}}>
        <Sidebar/>
        <AllCards/>
    </Nav>
  )
}

export default Body