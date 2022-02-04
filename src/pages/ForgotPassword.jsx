import React from 'react';
import Form from 'react-bootstrap/Form';

export default function ForgotPassword() {
  return (
    <>
      <div className='forgot-password'>
        <div className='reset-password'>
          <h3 className='text-center fw-bold pt-5'>Reset Password</h3>
          <p className='text-center pt-3'>
            Enter your email address and we will send <br />
            you a reset password link
          </p>

          <Form.Group className='pb-5 pt-3' controlId='formBasicEmail'>
            <Form.Control
              className='orange-form'
              type='email'
              placeholder='mail@email.com'
            />
          </Form.Group>

          <button className='w-100 fw-bold'>Submit</button>

          <p className='back-return text-center fw-bold pt-5 pb-5'>
            Return back to <a href='/login'>Sign in</a>
          </p>
        </div>
      </div>
    </>
  );
}
