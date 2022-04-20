import styles from './card.module.css';
import {Button1} from './Buttons';

const Card=(props)=>{
    console.log(props);
    return (
        <>
    <div style={{backgroundColor: props.bg} }  className={styles.main}>

        <div className={styles.flex}>
        <h2>{props.date}</h2>
        <img src={props.imgUrl} alt="Not available"/>
        </div>
        
        <div className={styles.flex}>
       <Button1/>
       <div></div>
        </div>
        <h1>{props.title}</h1>
        <h1 style={{marginTop:-10}}>{props.title2}</h1>

        <div className={styles.flex}>
            <div><h3>{props.category}</h3></div>
            <div ><h1 className={styles.arrow}>⮕</h1></div>
        
        
        </div>
    </div>
        </>
    )
    }  
    

export default Card;