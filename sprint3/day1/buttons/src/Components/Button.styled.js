import React from 'react';
import styled from 'styled-components';

export const Btndesign=styled.button`
background-color:${(props)=> props.variant=="Primary"?"#006fd0":"white"};
color:${(props)=> props.variant=="Primary"?"white":"Black" && props.variant=="Link"?"Blue":"Black"};
margin:10px;
padding:10px 20px;
border:${(props)=> props.variant=="Dashed"?" 1px dashed grey":" 1px solid grey" && props.variant=="Link"||props.variant=="Text"?"none":" 1px solid grey"};
font-weight:bold;
`;


export const Container=styled.div`
width:500px;
margin:50px auto;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
padding:50px;
background-color:white;
`;