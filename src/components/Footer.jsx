import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from 'react-eva-icons';

export default function Footer() {
  return (
    <React.Fragment>
      <footer>
        <div className='footer top'>
          <div id='col0'>
            <div className='footer icon'>
              <img src='../img/logo_0.png' alt='logo' />
            </div>
            <div>
              <p>
                Subscribe to our newsletter to get popular informations and do
                not miss opportunities.
              </p>
            </div>
          </div>
          <div id='col1'>
            <div className='col-title'>
              <p>
                <strong>Quick Links</strong>
              </p>
            </div>
            <div>
              <NavLink className='link' to='/'>
                Home
              </NavLink>
            </div>
            <div>
              <NavLink className='link' to='/about'>
                About
              </NavLink>
            </div>
            <div>
              <NavLink className='link' to='/faqs'>
                FAQ's
              </NavLink>
            </div>
          </div>
          <div id='col2'>
            <div className='col-title'>
              <p>
                <strong>Our Location</strong>
              </p>
            </div>
            <div>
              <p>
                Subscribe to our newsletter to get popular informations and do
                not miss opportunities.
              </p>
            </div>
            <div id='footer-social-icons'>
              <span className='link-pointer'>
                <a href='https://google.com' target='_blank' rel='noreferrer'>
                  <Icon
                    name='google'
                    size='small' // small, medium, large, xlarge'
                    fill=' #e09100'
                  />
                </a>
              </span>
              <span className='link-pointer' target='_blank' rel='noreferrer'>
                <a href='https://facebook.com'>
                  <Icon name='facebook' size='small' fill=' #e09100' />
                </a>
              </span>
              <span className='link-pointer'>
                <a href='https://twitter.com' target='_blank' rel='noreferrer'>
                  <Icon name='twitter' size='small' fill=' #e09100' />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className='footer buttom'>
          <p>Copyright &copy; 2021 All Rights Reserved to Tulastack</p>
        </div>
      </footer>
    </React.Fragment>
  );
}
