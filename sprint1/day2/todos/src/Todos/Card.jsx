import React from 'react';
import styles from './styles.module.css';


const Card=(props)=>{
    console.log(props);
    return (
       <div key={props.id} className={styles.main}>
           <div className={styles.Content}>
          <h1 >{props.title}</h1>
           </div>
           <div className={styles.Two}>
               <div className={styles.round}></div>
           </div>
 
       </div>
    )
}
export default Card;