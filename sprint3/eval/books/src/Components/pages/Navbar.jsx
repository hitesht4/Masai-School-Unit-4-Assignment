import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Nav = styled.nav`
background-color:#fd9b95;
padding:30px;
font-size:20px;
display:flex;
text-align:center;
gap:40px;
justify-contents:space-between;
`;
const Small=styled.div`
font-size:30px;

`;
const Large=styled.div`
width:40%;
`;

export const Navbar = () => {
  // const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <Nav>
        {/* keep all the NavLinks here */}
        <Large></Large>
        <Small>
              <Link to="/">Home</Link>
        </Small>
        <Small>
              <Link to="about">About</Link>
        </Small>
         <Small>
               <Link to="books">Books</Link>
        </Small>
        <Small>
               {/* <Link to="/About">About</Link> */}
               <Link to="/login">Login</Link>
        </Small>


         <Large></Large>
        
      </Nav>
    </>
  );
};
