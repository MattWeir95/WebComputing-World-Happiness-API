import React from "react";

//Component Imports
import { Heading } from "../components/Heading";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";

//Returns the content of the Login page for the router.
export default function LoginPage() {
  return (
    <Styles>
      <div>
        <Heading heading="Login" secondHeading="Existing Account" />
        <LoginForm />
      </div>
    </Styles>
  );
}

//CSS
const Styles = styled.div`
  .heading {
    font-family: "Montserrat";
    padding-top: 100px;
    text-align: center;
    font-weight: 600;
    background-color: #f5f5f5;
  }

  div > h1 {
    font-size: 8rem;
    font-weight: 500;
  }

  div > p {
    font-size: 4rem;
    font-weight: 100;
    text-align: center;
    margin-bottom: 0px;
  }

  .btn {
    background-color: #729bf9;
    width: 20%;
    margin-left: 40%;
    margin-right: 40%;
  }

  #register {
    margin-bottom: 30px;
  }

  #logout {
    margin-top: 30px;
  }

  #email,
  #password {
    width: 820px;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    display: block;
    text-align: center;
  }

  #email {
    margin-bottom: 20px;
  }

  #error__alert {
    margin-top: 50px;
    text-align: center;
    width: 20%;

    margin-left: 40%;
    margin-right: 40%;
  }

  .login__page {
    background-color: #f5f5f5;
    height: calc(100vh - 57px);
  }
`;
