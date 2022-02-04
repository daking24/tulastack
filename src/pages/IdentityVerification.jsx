import React from 'react';

export default function IdentityVerification() {
  return (
    <>
      <div className="forgot-password">
        <div className="reset-password">

          <div className="logo-tula">
            <img src="../img/logo_1.png" width="250px" alt="" />
          </div>

          <h5 className="fw-bold">Identity Verification</h5>

          <p className="fw-bold ">Verification progress to retrieve password</p>

          <p className="fw-bold ">Please select your preferred method of verification</p>

          <div className="use-section">
            <p>Use email, if email is still in use</p>
            <button className="w-50 fw-bold">Email</button>
          </div>

          <div className="use-section mt-3">
            <p className='mb-0'>Use phone number, if phone <br /> number is still in use</p>
            <button className="w-50 fw-bold">Phone Number</button>
          </div>

          <button className="w-100 fw-bold mt-5 mb-5">Save and Login</button>
          
        </div>
      </div>
    </>
  )
}