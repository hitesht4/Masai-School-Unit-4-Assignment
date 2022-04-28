import React from 'react';
import styled from 'styled-components';

const Btn =styled.input`
padding:10px;
width:200px;
`;
const Submit =styled.button`
padding:10px;
width:200px;
margin:30px;
background-color:
#2cbc63;
border:none;
color:white;
font-weight:bold;
`;
const Container=styled.div`
padding:20px;
width:500px;
margin: 30px auto;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
text-align:center;
font-size:20px;
font-weight:bold;

`;
const Login = () => {
  return (
    <Container>
        <form action="" >
            <p>Username:</p>
            <Btn type="text" />
            <p>Password:</p>
            <Btn type="Password"/><br></br>
        </form>
    </Container>
  )
}

export default Login