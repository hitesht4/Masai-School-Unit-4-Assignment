import React,{useState} from 'react';
import styles from './card.module.css';



const Form =({handleChange,handleSubmit})=>{
   const[form, setForm]=useState(false);

    const formbtn=()=>{
        setForm(!form);
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
        <div className={StyleSheet.Add}>
        <h5>Title</h5>
        <input className={styles.form} name="title" type="text" placeholder="Enter Restraunt" onChange={handleChange}/>
        </div>
        <div className={StyleSheet.Add}>
        <h5>Image Url</h5>
        <input className={styles.form} name="url" type="text" placeholder="Enter Image" onChange={handleChange}/>
        </div>
        <div className={StyleSheet.Add}>
        <h5>Category</h5>
        <input className={styles.form} name="ratings" type="text" placeholder="Enter Category" onChange={handleChange}/>
        </div>

        <div className={StyleSheet.Add}>
        <h5>Ratings</h5>
        <input className={styles.form} name="ratings" type="text" placeholder="Enter ratings" onChange={handleChange}/>
        </div>


        <div className={StyleSheet.Add}>
        <h5>Reviews</h5>
        <input className={styles.form} name="reviews" type="text" placeholder="Enter reviews" onChange={handleChange}/>
        </div>

        <div className={StyleSheet.Add}>
        <h5>Price</h5>
        <input className={styles.form} name="price" type="text" placeholder="Enter price" onChange={handleChange}/>
        </div>


         <input className={styles.submit} type="submit" placeholder="Enter price" />
       </form>
        </>
    )
}

export default Form;