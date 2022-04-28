import React from 'react';
import Card from './Card';
import styled from 'styled-components';

 const data=[
    {
        "name":"Nrupul Dev",
        "level":15,
        "points":3000,
        "address":"Bangluru,India",
        "id":1,
        "color":"#29cb97",
    },
        {
        "name":"Sandhya",
        "level":13,
        "points":2000,
        "address":"Bangluru,India",
        "id":2,
        "color":"#86a6f3",
    },
        {
        "name":"Elon Tusk",
        "level":14,
        "points":3100,
        "address":"Bangluru,India",
        "id":3,
        "color":"#b65bf5",
    }
];

const Container=styled.div`
margin-left:40px;
padding:30px;
height:550px;
`;


const AllCards = () => {
  return (
      <Container >
        {data.map(item=>{
          return(<Card {...item}/> );  
            })}
        </Container>
  )
}

export default AllCards