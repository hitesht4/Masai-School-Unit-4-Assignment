import React from 'react'
import styled from 'styled-components';
import visa from './visa.png';
import chip from './chip.png'
import {Container,Chip,Box,Details,Image} from './Card.styled';




const Card = ({form}) => {
  return (
    
    <div style={{height:"auto"}}>
        <Box></Box>
       <Container>
        <Image src={visa} alt="" />
        <br/>
        <Chip src={chip} alt="" />
        <br/>
       <div>
         <h2>{form.card}</h2>
         </div> 
      

<Details>
      <div>
          <h5>Card Holder</h5>
          <h4>{form.name}</h4>
      </div>
            <div>
          <h5>Expiry</h5>
          <h4>{form.expiry}/{form.year}</h4>
            </div>
      <div>
          <h5>Cvv</h5>
          <h4>{form.cvv}</h4>
      </div>
      
 </Details>     
       </Container>
    </div>
   
   
  )
}

export default Card;