import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeProvider';


const Nav=styled.div`
width:100%;
padding:10px;
display:flex;
background-color:${(props)=> props.variant?"#1f2327":"#f5f6fa"};
`;
const Part=styled.div`
 width:15%;
 display:flex;
`;
const Gap=styled.div`
 width:70%;

`;
const Click=styled.button`
border:0;
padding:10px;
margin:15px 32%;
background-color:${(props)=> props.variant?"#29cb97":"#2991cb"};
color:${(props)=> props.variant?"white":"black"};
border-radius:10px;
`;
const Image=styled.img`
width:50px;
height:50%;
margin-top:18px;
margin-left:20px;
border-radius:50%;
`;
const Head=styled.h3`
color:${(props)=> props.variant?"white":"black"};

`;

const Navbar = () => {
  const {theme,changeTheme}=useContext(ThemeContext);

  return (
    <Nav variant={theme}>
        <Part>
        <Image src={theme?"https://previews.123rf.com/images/koblizeek/koblizeek2001/koblizeek200100050/138262629-man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-background-.jpg":"http://cdn.onlinewebfonts.com/svg/img_24787.png"} alt="" />
          <Head variant={theme} style={{marginLeft:"20px"}}>My Dashboard</Head>
        </Part>
        <Part><Click onClick={changeTheme} variant={theme}>Dark Mode</Click></Part> 
        <Gap></Gap>
    </Nav>
  )
}

export default Navbar