import React,{useState} from 'react';
import data from './data.json';
import Card from './Card';
import styles from './card.module.css';
import Form from './Form';


const Allcards=()=>{
    const[form, setForm]=useState(false);
    const[content,setContent]=useState([...data]);
    const[formdata,setformdata]=useState({});
    // const[elem,setElem]=useState([...data]);
    
    const formbtn=()=>{
        setForm(!form);
    }
    const Sort=(value)=>{
    if(value==="low"){
     data.sort(function(a,b){
        return a.price-b.price;
      })
    }
    else{
     data.sort(function(a,b){
        return b.price-a.price;
      }) 
    }
      setContent([...data]);
      
    }
    const filterBtn=(value)=>{
       const Filtered=data.filter(item=>
          item.ratings>value
        )
        setContent([...Filtered]);
    }
    const filterPay=(value)=>{
       if(value=="All"){
        var filtered=data.filter(item=>
            item.payements.cash==true && item.payements.card==true && item.payements.wallet==true
        )
       }
        else if(value=="Card"){
           filtered=data.filter(item=>
            item.payements.card==true 
        )
       }
        else{
           filtered=data.filter(item=>
            item.payements.cash==true 
        )
       }
       console.log(filtered)
       setContent([...filtered])
    }

    const handleChange=(e)=>{
      let InputName=e.target.name;
      setformdata({...formdata,
      [InputName]:e.target.value,
      })
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(formdata);
      setContent([...data,formdata])
      setForm(false);
    }

    return(
    <>
    <div className={styles.sort_div}>
     <div>
     <h2>Sort by ratings</h2>
     <button className={styles.sort}  onClick={()=>{filterBtn(4)}}>4★</button>
     <button className={styles.sort}  onClick={()=>{filterBtn(3)}}>3★</button>
     <button className={styles.sort}  onClick={()=>{filterBtn(2)}}>2★</button>
     <button className={styles.sort}  onClick={()=>{filterBtn(1)}}>1★</button>
     </div>
     <div> 
     <h2>Sort by Price</h2>
     <button className={styles.sort}onClick={()=>{Sort("low")}}>Low to High</button>
     <button className={styles.sort}onClick={()=>{Sort("high")}}>High to Low</button>
     </div>
     <div> 
     <h2>Filter by Payement Methods</h2>
     <button className={styles.sort} onClick={()=>{filterPay("Cash")}}>Cash</button>
     <button className={styles.sort} onClick={()=>{filterPay("Card")}}>Card</button>
     <button className={styles.sort} onClick={()=>{filterPay("All")}}>All</button>
     </div>
      <div> 
     <h2>Add New Restraunt</h2>
     <button className={styles.sort} onClick={formbtn}>{form ? "Close Form": "Open Form"}</button>
     {form ? <Form handleChange={handleChange} handleSubmit={handleSubmit}/>  : ""}
     </div>
     </div>
        <div className={styles.container}>
        {content.map(item=>{
            return(
                <>
                 <Card {...item}/>
                </>
            )
        })}
        </div>
        </>
    );
}
export default Allcards;