import React,{useEffect, useState} from 'react';
import styles from './form.module.css';
import Form from './Form'; 
import Table from './Table';

const Alldata = () => {
    const[data,setdata]=useState([]);
   
    const getData=async()=>{
        let res=await fetch("http://localhost:3000/data");
        let data=await res.json();
        console.log(data);
        setdata([...data]);
    }
    useEffect(()=>{
        getData();
    },[]);


  return (
  
       <table className={styles.table}>      
        <thead>
            <tr className={styles.table}>
                <td>S.No</td>
                <td>Name</td>
                <td>Age</td>
                <td>Department</td>
                <td>Address</td>
                <td>Salary</td>
                <td>Married</td>
            </tr>
        </thead>
        <tbody>
                {data.map((item) => {
                 return (
                   <Table{...item}/>
                );
             })}
        </tbody>
    </table>


  )
}

export default Alldata;


