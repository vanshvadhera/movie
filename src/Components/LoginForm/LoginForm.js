import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import "./LoginForm.css";

const LoginForm = () => {
  const emailRef = useRef();
  const loginHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.name.value;
    const password = emailRef.current.password.value;
    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }
    localStorage.setItem("LoginInfo", JSON.stringify({ email, password }));
    window.location.reload();
    console.log(email, password);
  };
  return (
    <div className="d-flex justify-content-center align-item-center mt-5">
      <center>
      <h1 className="mb-5" >Hey, Lets Login Into Your Account</h1>
        <div className="LoginForm">
          <Form ref={emailRef}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" name="name" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Enter Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
              />
            </Form.Group>
            <Button
              variant="outline-success"
              type="submit"
              onClick={loginHandler}
            >
              Login
            </Button>
          </Form>
        </div>
      </center>
    </div>
  );
};

export default LoginForm;
