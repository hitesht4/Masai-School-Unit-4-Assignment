import Alldata from './Components/Alldata';
import Form from './Components/Form';
import React,{useState} from 'react';
import './App.css';

function App() {
  const [Data,setData]=useState(false);
  const handleClick=()=>{
    setData(!Data);
  }
  return (
    <div className="App">
      <button onClick={handleClick}>{Data?"Add Data" : "Show Data"}</button>
    {Data ? <Alldata/> : <Form/>} 
    </div>
  );
}

export default App;
