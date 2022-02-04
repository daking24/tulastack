import React from 'react';
import ScriptTag from 'react-script-tag';

export default function AuthenticationVerification() {
  return (
    <>
      <div className="forgot-password">
        <div className="reset-password">

          <div className="logo-tula">
            <img src="../img/logo_1.png" width="250px" alt="" />
          </div>

          <h5 className="fw-bold">Authentication Required</h5>

          <p className="fw-bold ">We have sent a One Time Password(OTP) to the email ex***********@gmail.com</p>

          <p className="fw-bold">Enter OTP</p>

          <div class="mb-6 text-center">
            <div id="otp" class="d-flex justify-center">
              <input class="m-2 text-center orange-form form-control form-control-solid rounded" type="text" id="first" maxlength="1" />
              <input class="m-2 text-center orange-form form-control form-control-solid rounded" type="text" id="second" maxlength="1" />
              <input class="m-2 text-center orange-form form-control form-control-solid rounded" type="text" id="third" maxlength="1" />
              <input class="m-2 text-center orange-form form-control form-control-solid rounded" type="text" id="fourth" maxlength="1" />
              <input class="m-2 text-center orange-form form-control form-control-solid rounded" type="text" id="fifth" maxlength="1" />
              <input class="m-2 text-center orange-form form-control form-control-solid rounded" type="text" id="sixth" maxlength="1" />
            </div>
          </div>

          <button className="w-100 fw-bold mt-5 mb-5">Continue</button>

          <p className="back-return text-center fw-bold pb-5">Didn't recieve a mail? <a href="">Resend again</a></p>
          

          <ScriptTag isHydrating={true} type="text/javascript" src="../components/OTPInput.js" />
        </div>
      </div>
    </>
  )
}