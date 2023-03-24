// Withdraw.js
import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import { Card, Button, Form } from "react-bootstrap";
import "./styles/Card.css";

export function Withdraw({loggedInUser, updateUser, updateUserBalance}) {
  const [amount, setAmount] = useState("");
  const ctx = useContext(UserContext);
  const [status, setStatus] = useState("");

  const handleWithdraw = () => {
    if (!validate(amount, "amount")) return;

/*
    for (let i = 0; i < ctx.users.length; i++) {
      if (ctx.users[i].email === loggedInUser.email) {
        ctx.users[i].balance = loggedInUser.balance - Number(amount);
      }
    }
*/
    const updatedUser = { ...loggedInUser, balance: loggedInUser.balance - Number(amount) };
    updateUser(updatedUser);
    updateUserBalance(updatedUser);
    showSuccess();
  };

  function reset() {
    setTimeout(() => {
      setStatus("");
      setAmount("");
    }, 4000);
  }

  function showSuccess() {
    setStatus(`Your withdrawl of $${amount} was successful!`)
    reset();
  }

  function validate(field, label) {

    if (isNaN(field)) {
      setStatus("Error: enter numerical values only.");
      reset();
      return false;
    } else if (Number(field) < 0) {
      setStatus("Error: " + label + " cannot be negative.");
      reset();
      return false;
    }
    else if (!field) {
      setStatus("Error: " + label + " cannot be empty.");
      reset();
      return false;
    }



    else if (loggedInUser.balance - Number(amount) < 0) {
      setStatus("Transaction failed: must be less than your current balance.");
      reset();
      return false;
    }
    return true;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card className="white" style={{ width: "35rem" }}>
        <Card.Img variant="top"
          src={`${process.env.PUBLIC_URL}/images/image-Withdraw.jpg`} alt="card image cap"
        />
        <Card.Body>
          <Card.Title>Withdraw</Card.Title>
          <Card.Text>Your current balance is ${loggedInUser.balance}</Card.Text>
          <Form>
            <input type="text" className="form-control" id="amount" placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.currentTarget.value)}
            />
            <br />
            {status && <p>{status}</p>}
            <Button type="button" className="btn btn-light" onClick={handleWithdraw} disabled={status !== "" || amount === ""}
            >
              Withdraw
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Withdraw;