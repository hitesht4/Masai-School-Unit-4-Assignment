import React from 'react'
import styled from 'styled-components';
import styles from './card.module.css';
import {Container,Date,Smaller,Span,Enter} from './Form.styled';




const Form = ({handleInput,handleSubmit}) => {
  return (
    <Container>
        <h1>
            Payement Details
        </h1>
        <form onChange={handleSubmit}>
    <div>
          <p htmlFor="">Card Holder Name</p> 
          <Enter type="text" name="name" onChange={handleInput}/>
    </div>
    <div>
          <p htmlFor="">Card Number</p>
          <Enter type="number" name="card" onChange={handleInput}/>
    </div>

    <Date>
        <Smaller>
          <p>Expiry Month</p>
          <Enter type="number" name="expiry" onChange={handleInput}/>
        </Smaller>
        <Smaller>
          <p >Expiry Year</p>
          <Enter type="number" name="year" onChange={handleInput}/>
        </Smaller>
        <Smaller>
          <p >CVV</p>
          <Enter type="number" name="cvv" onChange={handleInput}/>
        </Smaller>      
    </Date>

    <div className={styles.submit} >
      <h2>Total Payment:<Span>12000</Span></h2>
      <input className={styles.btn} type="submit" value="Pay"/>
    </div>
</form>
    </Container>
  )
}

export default Form