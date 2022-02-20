import React, { useState } from "react";
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
const ContactMail = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <Container>
     
    <Form onSubmit={handleSubmit} style={{border: "solid black 2px ", background: " #e8f6df", marginTop: "35px", boxShadow: "black 0px 0px 20px 7px"}}>
      <div>
        <Form.Label htmlFor="name">Name</Form.Label>
        <br></br>
        <input style={{width: "250px"}} type="text" id="name" required />
      </div>
      <div>
        <Form.Label htmlFor="email">Email</Form.Label>
        <br></br>
        <input style={{width: "300px"}} type="email" id="email" required />
      </div>
      <div>
        <Form.Label htmlFor="message">Message</Form.Label>
        <br></br>
        <textarea style={{width: "400px"}} id="message" required />
      </div>
      <Button style={{width: "150px", marginBottom: "20px", marginLeft: "20px"}} type="submit">{status}</Button>
    </Form>
    </Container>
  );
};

export default ContactMail;