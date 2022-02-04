import React from 'react';
import Form from 'react-bootstrap/Form';

export default function CreateNewPassword() {
  return (
    <>
      <div className="forgot-password">
        <div className="reset-password">

          <div className="logo-tula">
            <img src="../img/logo_1.png" width="250px" alt="" />
          </div>

          <h5 className="fw-bold">Create a new password</h5>

          <p className="fw-bold ">These password is reguired whenever you want to <br /> log in to TulaStack</p>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bold">Password</Form.Label>
            <Form.Control className="orange-form" type="password" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fw-bold">Confirm Password</Form.Label>
            <Form.Control className="orange-form" type="password" placeholder="" />
          </Form.Group>

          
          <button className="w-100 fw-bold mt-5 mb-5">Save and Login</button>
          
        </div>
      </div>
    </>
  )
}