import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Icon from 'react-eva-icons';
// import FAQ from '../pages/FAQ';

export default function Header() {
  const navigate = useNavigate();

  const activeUser = JSON.parse(sessionStorage.getItem('active'));
  console.log(activeUser);

  return (
    <React.Fragment>
      <nav>
        <div className='logo'>
          <NavLink to='/'>
            <img src='../img/logo_0.png' alt='logo' />
          </NavLink>
        </div>
        <div className='nav-links'>
          <span>
            <NavLink to='/' className='nav-link'>
              Home
            </NavLink>
          </span>
          <span>
            <NavLink to='/dashboard' className='nav-link'>
              Dashboard
            </NavLink>
          </span>
          <span>
            <NavLink to='/contact-us' className='nav-link'>
              Contact Us
            </NavLink>
          </span>
          <span>
            <NavLink to='/faqs' className='nav-link'>
              FAQ's
            </NavLink>
          </span>
          <span className='search-button'>
            <NavLink to='/#'>
              <Icon
                name='search-outline'
                size='large' // small, medium, large, xlarge
              />
            </NavLink>
          </span>
        </div>
        <div className='action-btn'>
          {activeUser ? (
            <Logout />
          ) : (
            <>
              <span>
                <NavLink to='/login' className='nav-link'>
                  Login
                </NavLink>
              </span>
              <button onClick={() => navigate('/register')}>Register</button>
            </>
          )}
        </div>
      </nav>
    </React.Fragment>
  );
}

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('active');
    navigate('/');
  };

  return (
    <span>
      <NavLink onClick={handleLogout} className='nav-link'>
        Logout
      </NavLink>
    </span>
  );
};
