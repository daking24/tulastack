import React from 'react';
import Form from 'react-bootstrap/Form';

export default function PasswordAuthentication() {
  return (
    <>
      <div className="forgot-password">
        <div className="reset-password">

          <div className="logo-tula">
            <img src="../img/logo_1.png" width="250px" alt="" />
          </div>

          <h5 className="fw-bold">Authentication Required</h5>

          <p className="fw-bold ">What is the full name associated with these account?</p>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bold">Full Name</Form.Label>
            <Form.Control className="orange-form" type="text" placeholder="" />
          </Form.Group>

          <button className="w-100 fw-bold mt-5 mb-5">Save and Login</button>
          
        </div>
      </div>
    </>
  )
}