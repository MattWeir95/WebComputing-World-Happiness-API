import React, { useEffect } from "react";
import { Heading } from "../components/Heading";
import styled from "styled-components";
import { Button } from "reactstrap";

import { Alert, Form, Input, FormGroup } from "reactstrap";
import { useState } from "react";

const API_URL = "http://131.181.190.87:3000";

export default function LoginPage() {
  let token = localStorage.getItem("token");
  console.log("LoginPageToken: " + token);
  return (
    <Styles>
      <div>
        <Heading heading="Login" secondHeading="Existing Account" />
        <LoginForm />
      </div>
    </Styles>
  );
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(null);

  function Login() {
    const url = `${API_URL}/user/login`;

    return fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())

      .then((res) => {
        if (!res.error) {
          localStorage.setItem("token", res.token);
          console.log(localStorage.getItem("token"));
          window.location.href = "/";
        } else {
          setError(true);
          setMessage(res.message);
          setAlert(true);
        }
      });
  }

  return (
    <Styles>
      <div>
        <FormGroup>
          <Form>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              placeholder="Enter Email Address Here"
            />
          </Form>

          <Form>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              placeholder="Enter Password Here"
            />
          </Form>
        </FormGroup>

        <Button onClick={Login} size="lg">
          Login
        </Button>
        <ErrorAlert />
      </div>
    </Styles>
  );

  function ErrorAlert() {
    useEffect(() => {
      setTimeout(() => {
        setAlert(false);
      }, 4000);
    });

    if (error) {
      return (
        <Styles>
          <Alert id="error__alert" color="danger" isOpen={alert}>
            {message}
          </Alert>
        </Styles>
      );
    }

    return null;
  }
}

const Styles = styled.div`
  .heading {
    font-family: "Montserrat";
    padding-top: 100px;
    text-align: center;
    font-weight: 600;
  }

  div > h1 {
    font-size: 8rem;
    font-weight: 500;
  }

  div > p {
    font-size: 4rem;
    font-weight: 100;
    text-align: center;
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
`;
