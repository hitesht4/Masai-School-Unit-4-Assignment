import React from 'react';
import { Navbar ,Container,Nav} from 'react-bootstrap';
import styles from './styles.module.css';
import { CgProfile } from 'react-icons/cg';
import {AiOutlineShoppingCart,AiOutlineSearch} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
 


const NavbarTop = () => {
  const Navigate=useNavigate();

 const Move=(route)=>{
   Navigate(route);
 }
  return (
    <>
    <div className={styles.top}> 
        🇦🇺 10% Off on Iphones - Flat Rate Global Shipping 🌏
    </div>


    <div>
  <Navbar bg="light" expand="lg">
  <Container fluid>
    <div>
    <img onClick={()=>Move("/")} src="https://cdn.shopify.com/s/files/1/0183/5769/files/proper_logo_website_header_85x.png?v=1618292350" alt="" />
    </div>


    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/Products" style={{color:"black",marginLeft:20}}>Shop</Nav.Link>

        <Nav.Link href="/Contact" style={{color:"black",marginLeft:20}}>Contact Us</Nav.Link>

        <Nav.Link href="/About" style={{color:"black",marginLeft:20}}>ABOUT</Nav.Link>


      </Nav>
      
    </Navbar.Collapse>
    < CgProfile style={{width:"30px", height:"30px",margin:"20"}} onClick={()=>Move("/Login")}/>
    <AiOutlineSearch style={{width:"30px", height:"30px",margin:"20"}}/>
    <AiOutlineShoppingCart style={{width:"30px", height:"30px",margin:"20"}} onClick={()=>Move("/Cart")}/>
    
  </Container>
</Navbar>
    </div>

  </>
  )
}

export default NavbarTop;