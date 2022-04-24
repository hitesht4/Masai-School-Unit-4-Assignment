import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import Form from './Components/Form';
import React,{useState} from 'react';

function App() {
const [formdata,setformdata]=useState({});

  const handleSubmit=(e)=>{
    e.preventDefault(); 
  }
  const handleInput=(e)=>{
 const InputName=e.target.name;
        setformdata(
        {
            ...formdata,
            [InputName]:e.target.value,
        })
        console.log(formdata);
        
    }
  return (
    <div className="App">
     <Card form={formdata} />
     <Form handleInput={handleInput} handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
