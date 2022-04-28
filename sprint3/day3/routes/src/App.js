import './App.css';
import Home from './Pages/Home';
import { Routes, Route} from "react-router-dom";
import  NavbarTop  from './Components/Navabar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Products from './Pages/Products';
import RequiredAuth from './Components/RequiredAuth';
import NotFound from './Pages/NotFound';
import OneProduct from './Pages/OneProduct';
import { useEffect } from 'react';



function App() {
  useEffect(()=>{
    console.warn("Intall following packages 1.npm install react-bootstrap bootstrap  2.npm install react-icons --save   3. npm install react-router-dom@6")
  },[])
  return (
    <div className="App">
      <NavbarTop/>
     
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>  
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/singleProduct" element={<OneProduct/>}/>
      <Route path="/*" element={<NotFound/>}/>
      <Route path="/Products" element={
        <RequiredAuth> 
          <Products/>
        </RequiredAuth>}/>
       </Routes>
       
    </div>
  );
}

export default App;
