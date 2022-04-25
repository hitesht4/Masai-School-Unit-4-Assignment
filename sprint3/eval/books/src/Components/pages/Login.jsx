import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { Form } from "./EditBookData";

// add input styling
export const Input = styled.input`
padding:10px;
font-size:30px;
background-color:#9bbabd;
width:60%;
margin-top:20px;
::placeholder

`;


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/books";
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };
  useEffect(() => {
    console.log(token);
    if (token) {
     return navigate(from, { replace: true });
    }
  }, [token]);
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          data-testid="login-form-email"
          placeholder="Enter Email"
          value={email}
          type="text"
          onChange={(e) => setEmail("eve.holt@reqres.in")}
        />
        <br/>
        <Input
          data-testid="login-form-password"
          placeholder="Enter Password"
          value={password}
          type="password"
          onChange={(e) => setPassword("cityslicka")}
        />
        <br/>
        <Input value = "Login" type={"submit"} data-testid="login-form-submit" />
      </Form>
    </>
  );
};
