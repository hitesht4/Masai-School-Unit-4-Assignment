import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeProvider';

const Image=styled.img`
width:60px;
height:100%;
border-radius:50%;
`;
const ImgDiv=styled.div`
display:flex;
height:80px;
gap:10px;
width:100%;
`;

const Container=styled.div`
width:auto;
padding:10px 20px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
height:150px;
margin-top:5px;
background-color:${(props)=> props.variant?"#292e33":"#f5f6fa"};
`;
const Score=styled.div`
display:flex;
`;
const Line=styled.div`
height:10px;
width:100%;
margin-top:10px;
border-radius:10px;

`;
const Text=styled.p`
font-weight:bold;
color:${(props)=> props.variant?"white":"black"};
`;
const Card = (props) => {
  const {theme}=useContext(ThemeContext);
  return (
    <Container key={props.id} variant={theme}>
        <ImgDiv>
          <Image src={theme?"https://previews.123rf.com/images/koblizeek/koblizeek2001/koblizeek200100050/138262629-man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-background-.jpg":"http://cdn.onlinewebfonts.com/svg/img_24787.png"} alt="" />
          <div>
              <Text variant={theme}>{props.name}</Text>
              <Text variant={theme}>{props.address}</Text>
          </div>
        </ImgDiv>
        <Line style={{backgroundColor:props.color}}>
        </Line>
        <Score>
            <Text variant={theme}>Professional Level {props.level}</Text>
            <Text variant={theme} style={{marginLeft:"180px"}}>{props.score}</Text>
        </Score>
     
    </Container>
  )
}

export default Card