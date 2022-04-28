import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthProvider'
import Cards from '../Components/Card';
import styles from '../Components/Products.module.css';

const Cart = () => {
  const {cart}=useContext(AuthContext);

  useEffect(()=>{
    console.log(cart);
  },[]);
 
  return (
    <div className={styles.container}style={{width:"90%"}}>
       <div>
       {cart?<><Cards {...cart}/>
       <button className={styles.Submit}>Buy Now</button>
       </>:<h1>Please Login First</h1>}
       </div>
    </div>
  )
}

export default Cart