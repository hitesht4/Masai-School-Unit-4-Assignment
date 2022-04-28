import React from 'react';
// import NavbarTop from '../Components/Navabar';
import Footer from '../Components/Footer';
import  Carousal  from '../Components/Carousal';
import OneProduct from './OneProduct';


const Home = () => {
  return (
    <div>
        <Carousal/><br />
        <Footer/>
        <OneProduct/>
    </div>
  )
}

export default Home