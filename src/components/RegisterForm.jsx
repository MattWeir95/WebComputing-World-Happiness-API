import React, { useState, useEffect } from "react";

//Component Imports
import { Alert, Form, Input, FormGroup } from "reactstrap";
import { Button } from "reactstrap";
import styled from "styled-components";

//API Url to edit and then post register information to.
const API_URL = "http://131.181.190.87:3000";


//Allows the user to register using a form, Provides error banners if incorrect inputs.
export default function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [message, setMessage] = useState("");
    const [alert, setAlert] = useState(null);
  
    //Timer for the error banners
    useEffect(() => {
      setTimeout(() => {
        setAlert(false);
      }, 4000);
    });
  
    //API Post to register a new user. Returns error banner if an error occurs
    function Register() {
      const url = `${API_URL}/user/register`;
  
      return fetch(url, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (!res.error) {
            window.location.href = "/login";
          } else {
            setError(true);
            setMessage(res.message);
            setAlert(true);
          }
        });
    }
  
    return (
      <Styles>
        <div className="register__page">
          <FormGroup>
            <Form>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="text"
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
          <Button onClick={Register} size="lg">
            Register
          </Button>
          <ErrorAlert />
        </div>
      </Styles>
    );
  

    //Returns error banner if an error occurs
    function ErrorAlert() {
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

  //CSS
const Styles = styled.div``