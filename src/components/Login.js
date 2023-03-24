// Login.js
// PURPOSE: After a user has created an account, they log in here.
// ARCHITECTURE:  The Login subcomponent is a child of App. It is rendered in the main area of App.js when the user navigates to the /login path.
// FUNCTIONALITY: The user enters their email and password. If the email and password match an existing account, the user is logged in and navigated to the home page. If the email and password do not match an existing account, the user is navigated to the create account page.

// IMPORTS
//            REACT
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//            DESIGN: STYLE + BOOTSTRAP COMPONENTS
import { Card } from 'react-bootstrap';
import "./styles/Card.css";

// COMPONENT  Login
// PURPOSE    Renders the login form.
//            - Validates the user's email and password.
//            - If either field is empty, the user is prompted to enter a value.
//            - If both fields are filled, the user is logged in.
export function Login({updateUser, users}) {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // FUNCTION: validate
  // PURPOSE:
  //    - Validates the user's email and password.
  //    - If either field is empty, the user is prompted with an error message to enter a value.
  //    - If both fields are filled, the user is logged in.
  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 4000);
      return false;
    }
    return true;
  }

  // FUNCTION: handleLogin
  // PURPOSE:  Validates the user's email and password. If either field is empty, the user is prompted to enter a value. It finds the user from the users array. If the user is found, the user is logged in and navigated to the home page. If the user is not found, the user is navigated to the create account page.
  function handleLogin() {
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      updateUser(user);
      navigate("/");
    } else {
      navigate("/create-account");
    }
  }

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
    <Card className="white" style={{ width: '35rem' }}>
    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/image-account.jpg`} alt="card image cap" />
      <Card.Body>
        <Card.Title>Please Log In</Card.Title>
          <>
            <br/>
            Email address
            <br />
            <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.currentTarget.value)}/><br />

            Password
            <br />
            <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.currentTarget.value)}/><br />

            {status && <p>{status}</p>}

            <button type="submit" className="btn btn-light"
              onClick={handleLogin}>
              Login
            </button>
          </>
      </Card.Body>
    </Card>
    </div>
  );
}