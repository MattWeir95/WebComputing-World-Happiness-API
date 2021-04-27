import { useState, useEffect } from "react";

//Component Imports
import { Button } from "reactstrap";
import { SendLogin } from "../api";
import { Alert, Form, Input, FormGroup } from "reactstrap";
import styled from "styled-components";

//Allows the user to login using a form, Provides error banners if incorrect inputs.
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(null);

  //A timer for the error banners
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 4000);
  });

  //API Post to log in an existing user.
  function LoginUser() {
    SendLogin(email, password)
      .then((res) => res.json())

      .then((res) => {
        if (!res.error) {
          localStorage.setItem("token", res.token);
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
      <div className="login__page">
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

        <Button onClick={LoginUser} size="lg">
          Login
        </Button>
        <ErrorAlert />
      </div>
    </Styles>
  );

  //Returns the error banner with a message from the api if an error occurs.
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

const Styles = styled.div``;
