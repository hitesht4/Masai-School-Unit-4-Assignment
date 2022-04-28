import React from 'react';
import styles from './Products.module.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Cards = (props) => {
  const navigate=useNavigate();
  const {singleSearch}=useContext(AuthContext);
  return (
    <div className={styles.card} key={props.index}>
    <div>
    <img className={styles.img}src={props.imgUrl} alt="no preview"/>
    </div>
 
      <h5 style={{color:"grey"}}>{props.title}</h5>
      <h6 style={{color:"blue",fontWeight:'bold'}}><span>$</span>{props.price}</h6>
      <button 
      style={{border:"none",backgroundColor:"white"}}
      onClick={()=>singleSearch(props.id)}
      >More</button>
      
    
 
    </div>
  )
}

export default Cards;