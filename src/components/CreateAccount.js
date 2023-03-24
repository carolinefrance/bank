// CreateAccount.js
import React, {useState, useContext} from "react";
import { UserContext } from '../App';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./styles/Card.css";

export function CreateAccount({addUser}) {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ctx = useContext(UserContext);
  console.log("ctx.users", ctx.users);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 4000);
      return false;
    }
    if (label==="password" && field.length < 8) {
      setStatus("Error: " + label + " must be at least 8 characters");
      setTimeout(() => setStatus(""), 4000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;

    addUser({ name, email, password, balance: 100 });
    setShow(false); // shows else block
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
    <Card className="white" style={{ width: '35rem' }}>
    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/image-account.jpg`} alt="card image cap" />
      <Card.Body>
        <Card.Title>Create an Account</Card.Title>
        { show ? (
          <>
            Name
            <br />
            <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={(e) => setName(e.currentTarget.value)}/><br />

            Email address
            <br />
            <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.currentTarget.value)}/><br />

            Password
            <br />
            <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.currentTarget.value)}/><br />

            {status && <p>{status}</p>}

            <button type="button" className="btn btn-light"
              onClick={handleCreate}>
              Submit
            </button>
          </>
        ) : (
          <>
            <br />
            <h6>Success! Your account has been created.</h6>
            <p>What would you like to do next?</p>
            <br />

            <Link to="/login">
            <button type="button" className="btn btn-light">
              Log In
            </button>
            </Link>
            <img alt="" src={`${process.env.PUBLIC_URL}/images/spacer.png`} style={{width: "20px"}} />
            <button className="btn btn-light" onClick={clearForm}>
              Add another account
            </button>
          </>
        )}
      </Card.Body>
    </Card>
    </div>
  );
}