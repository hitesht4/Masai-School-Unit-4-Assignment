import React from 'react';
import styles from './card.module.css';

const Card=(props)=>{
    return (
    <div className={styles.card} key={props.id}>
        <img src={props.url} alt="" />
        <h2>{props.title}</h2>
        <p>{props.category}</p>
        
        <div className={styles.flex}>
            <div >
                <h4 style={{color:"green",height:"35px"}} >★{props.ratings}</h4>
            </div>
        
        <h4>{props.reviews}reviews</h4>
        <h4>{props.price}     For Two</h4>
        </div>
        <button style={{backgroundColor:"green",color:"white",padding:10}}>Order Online</button>

    </div>)
}

export default Card;