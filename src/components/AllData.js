// AllData.js
import React, {useState} from 'react';
import { Card, Table } from 'react-bootstrap';
import './styles/Card.css';
import './styles/Table.css';

export function AllData({users}) {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
    <Card className="white" style={{ width: '35rem' }}>
    {/*<Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/image-data.jpg`} alt="card image cap" />*/}
      <Card.Body>
        <Card.Title>All Data</Card.Title>
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.balance}</td>
            </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
    </div>
  );
}

export default AllData;