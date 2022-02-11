import React, { useState } from 'react';
import { FormGroup, Spinner, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [registerInfo, setRegisterInfo] = useState({});

  const handleRegisterInfo = ({ target }) => {
    setRegisterInfo((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const [isSigning, setIsSigining] = useState(false);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    setIsSigining(true)

    const _data = registerInfo;
    console.log(_data)

    try {
      const response = await fetch(`${process.env.REACT_APP_API_REGISTER}`, {
        method: 'POST',
        credentials: 'same-origin',
        body: JSON.stringify(_data),
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Methods': 'POST',
          'Content-Type': 'application/json, charset=UTF-8',
        },
      });

      const data = await response.json();
      if (data.token) {
        navigate('/');
        setIsSigining(false);
        console.log(data);
        sessionStorage.setItem(
          'active',
          JSON.stringify({
            firstname: data.user.first_name,
            lastName: data.user.last_name,
            email: data.user.email,
            token: data.token,
          })
        );
      }
    } catch (err) {
      console.log(`Error creating new user: ${err}`);
      setIsSigining(false);
    }
  };

  return (
    <>
      <section className='signin'>
        <div className='signin-logo'>
          <a href='/'>
            <img src='../img/logo_1.png' alt='tulastack_logo' />
          </a>
        </div>

        <div className='signin-form mb-5'>
          <div className='signin-mask'>
            <h3>Sign up to TulaStack</h3>
            <Form method='POST' onSubmit={handleSubmit}>
              <div className='names'></div>
              <Form.Group className='mb-3' controlId='formBasicText'>
                <Form.Label>Last Name </Form.Label>
                <Form.Control
                  className='orange-form'
                  type='text'
                  placeholder='Doe'
                  name='last_name'
                  onChange={handleRegisterInfo}
                  value={registerInfo.last_name || ''}
                  required
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicText'>
                <Form.Label>Firstname</Form.Label>
                <Form.Control
                  className='orange-form'
                  type='text'
                  placeholder='John'
                  name='first_name'
                  onChange={handleRegisterInfo}
                  value={registerInfo.first_name || ''}
                  required
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className='orange-form'
                  type='email'
                  placeholder='mail@email.com'
                  name='email'
                  onChange={handleRegisterInfo}
                  value={registerInfo.email || ''}
                  required
                  // disabled={registerInfo.name ? false : true}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className='orange-form'
                  type='password'
                  placeholder='password'
                  name='password'
                  onChange={handleRegisterInfo}
                  value={registerInfo.password || ''}
                  required
                  // disabled={registerInfo.email ? false : true}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicText'>
                <Form.Label>Occupation </Form.Label>
                <Form.Control
                  className='orange-form'
                  type='text'
                  placeholder='Trader'
                  name='occupation'
                  onChange={handleRegisterInfo}
                  value={registerInfo.occupation || ''}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicText'>
                <Form.Label>Phone </Form.Label>
                <Form.Control
                  className='orange-form'
                  type='text'
                  placeholder='xxxxxxxxxxx'
                  name='phone_number'
                  onChange={handleRegisterInfo}
                  value={registerInfo.phone_number || ''}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicText'>
                <Form.Label>Date of Birth </Form.Label>
                <Form.Control
                  className='orange-form'
                  type='date'
                  name='dob'
                  onChange={handleRegisterInfo}
                  value={registerInfo.dob || ''}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicText'>
                <Form.Label>Nationality </Form.Label>
                <Form.Control
                  className='orange-form'
                  type='text'
                  name='nationality'
                  onChange={handleRegisterInfo}
                  value={registerInfo.nationality || ''}
                  required
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicText'>
                <Form.Label>Next of Kin </Form.Label>
                <Form.Control
                  className='orange-form'
                  type='text'
                  placeholder='Jane Doe'
                  name='next_of_kin'
                  onChange={handleRegisterInfo}
                  value={registerInfo.next_of_kin || ''}
                  required
                />
                <Form.Group className='mb-3' controlId='formBasicText'>
                  <Form.Label>Address </Form.Label>
                  <Form.Control
                    as='textarea'
                    rows={5}
                    className='orange-form'
                    name='address'
                    onChange={handleRegisterInfo}
                    value={registerInfo.address || ''}
                    required
                  />
                </Form.Group>
              </Form.Group>
              <FormGroup className='mb-3'>
                <a href='/reset'>Forgot password?</a>
              </FormGroup>{' '}
              <Form.Group
                className='mb-3 d-flex '
                controlId='formBasicCheckbox'
              >
                <Form.Check
                  className='orange-form'
                  type='checkbox'
                  checked='true'
                />
                <p className='px-2'>
                  I accept the <span className='terms'>Terms</span> &{' '}
                  <span className='terms'>Conditions</span> of TulaStack
                </p>
              </Form.Group>
              <button type='submit' className='w-100'>
                Sign up{' '}
                {isSigning && (
                  <Spinner
                    as='span'
                    animation='border'
                    size='sm'
                    role='status'
                    aria-hidden='true'
                  />
                )}
              </button>
            </Form>

            <p className='text-center pt-4'>or sign up using</p>

            <div className='socials'>
              <a href=''>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='50'
                  height='50'
                  fill='currentColor'
                  className='bi bi-google'
                  viewBox='0 0 16 16'
                >
                  <path d='M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z' />
                </svg>
              </a>
              <a href=''>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  width='50'
                  height='50'
                  data-prefix='fab'
                  data-icon='facebook-f'
                  className='svg-inline--fa fa-facebook-f'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 320 512'
                >
                  <path
                    fill='currentColor'
                    d='M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z'
                  ></path>
                </svg>
              </a>
              <a href=''>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='50'
                  height='50'
                  fill='currentColor'
                  className='bi bi-twitter'
                  viewBox='0 0 16 16'
                >
                  <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z' />
                </svg>
              </a>
            </div>

            <p className='conditions'>
              By clicking the Sign up button, you confirm that you <br /> accept
              our <span className='terms'>Terms of use</span> and{' '}
              <span className='terms'>Privacy Policy</span>.
            </p>

            <p className='text-center account'>
              Already have an account?
              <a href='/login'>Sign in</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
