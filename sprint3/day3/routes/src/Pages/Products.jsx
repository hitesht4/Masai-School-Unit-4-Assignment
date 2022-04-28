import React, { useEffect ,useState} from 'react';
import Cards from '../Components/Card';
import styles from '../Components/Products.module.css';

const Products = () => {
  const [prod, setProd]=useState([]);

  const getData=async()=>{
    try{
        let res=await fetch("http://localhost:3005/data");
        let data=await res.json();
        setProd([...data]);    
    }
    catch(err){
        console.log(err);
    }
  }

  useEffect(()=>{
    getData(); 
  },[]);

  return (
        <div className={styles.container}>
        {prod.map(item=>{
            return(
                <>
                 <Cards {...item}/>
                </>
            )
        })}
        </div>
  )
}

export default Products