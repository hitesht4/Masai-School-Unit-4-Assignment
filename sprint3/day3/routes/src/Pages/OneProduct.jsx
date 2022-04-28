import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Cards from "../Components/Card";
import styles from '../Components/Products.module.css';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';


const OneProduct = () => {
  const[data,setdata]=useState([]);
  const {ver,AddtoCart}=useContext(AuthContext);

   
  const getData=async()=>{
    let res=await fetch(`http://localhost:3005/data?id=${ver}`);
    let data=await res.json();
   
    setdata([...data]);
     
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    
     
 <div className={styles.container}>
        {data.map(item=>{
            return(
                <>
                 <Cards {...item}/>
                 <div>
                   <h1>{data[0].title}</h1>
                   <p style={{textAlign:"start"}}>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt temporibus veniam aperiam sequi fugiat debitis cum? Nam laudantium sunt, iusto deleniti dolorum totam consequuntur libero expedita, mollitia facere impedit repudiandae?
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, vitae voluptate magni harum mollitia sunt assumenda quibusdam est quaerat animi sapiente et doloremque quis, odit alias, dolore eius laborum pariatur!
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque hic expedita consequatur aut velit maiores provident necessitatibus rerum quasi consectetur quibusdam doloremque, voluptates quas delectus beatae exercitationem ea perferendis repellat?
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, molestiae atque? Ipsa voluptatibus voluptatem voluptas soluta possimus, consequatur ut, laudantium at saepe illum alias sunt quaerat, asperiores totam aliquam maxime.
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde excepturi eos placeat maxime natus nisi porro adipisci et. Atque quod velit assumenda iusto est. Magnam vero iste at? Repellendus, eius.
                 </p>
                 <button className={styles.Submit}
                 onClick={AddtoCart(item)}
                 >Add To Cart
                 </button>
                 </div>
                </>
            )
        })}
        </div>
 
    
  )
}
export default OneProduct;