   import React,{useState} from 'react';
   import styles from './form.module.css';
   
   const Form = () => {
    const [formdata,setformdata]=useState({});


    const postData=async(formdata)=>{
       let res=await fetch("http://localhost:3000/data",{
         method:"POST",
         headers:{"Content-type":"application/json"},
         body:JSON.stringify(formdata),
       }) 

       let data=await res.json();
       console.log(data);
    }
    const handleChange=(e)=>{
        const InputName=e.target.name;

        if(e.target.type=="checkbox"){
            setformdata({
            ...formdata,
            [InputName]:e.target.checked,
        })
        console.log(formdata);
        }
        else if(e.target.type==="select"){
            console.log(e.target.value);
        }
        else{
        setformdata({
            ...formdata,
            [InputName]:e.target.value,
        })
        console.log(formdata);
        }

    }
    const handleSubmit=()=>{
        console.log("Submitted");
        postData(formdata);
    }
     return (
           <form onSubmit={handleSubmit}>

       <div className={styles.form}>

        <div className={styles.input}>
            <label>Name</label>
            <input
            type="text"
            onChange={handleChange}
            name="Name"
            placeholder='Enter Your Name'
            />
        </div>
        <div className={styles.input}>
            <label>Age</label>
            <input type="number" onChange={handleChange} name="Age"placeholder='Enter Your Age'/>
        </div>
        <div className={styles.input}>
            <label>Address</label>
            <input type="text" onChange={handleChange} name="Address" placeholder='Enter Address'/>
        </div>
        <div className={styles.input}>
            <label>Department</label>
            <select id="" onChange={handleChange} name="Department">
                <option value="IT">Information Technology</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
            </select>
        </div>
        <div className={styles.input}>
            <label>Salary</label>
            <input type="number" onChange={handleChange}name="Salary" placeholder='Enter Your Salary'/>
        </div>
        <div className={styles.input}>
            
            <input type="checkbox" onChange={handleChange} name="Married"/>
            <label>Married</label>
        </div>
        <div className={styles.input}>
            <div></div>
            <input className={styles.submit} type="Submit" onChange={handleChange} />
        </div>

        </div>
      
           </form>
     )
   }
   
   export default Form
