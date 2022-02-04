import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from '../pages/Index';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';
import FAQ from '../pages/FAQ';
import ContactUsPage from '../pages/ContactUsPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ForgotPassword from '../pages/ForgotPassword';
import SuccessfulReset from '../pages/SuccessfulReset';
import AuthenticationFailed from '../pages/AuthenticationFailed';
import CreateNewPassword from '../pages/CreateNewPassword';
import PasswordAuthentication from '../pages/PasswordAuthentication';
import IdentityVerification from '../pages/IdentityVerification';
import AuthenticationVerification from '../pages/AuthenticationVerification';
import Dashboard from '../pages/Dashboard';

export default function App() {
  const activeUser = JSON.parse(sessionStorage.getItem('active'));

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Index />} />
          <Route path='/faqs' element={<FAQ />} />
          <Route path='/contact-us' element={<ContactUsPage />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Signin />} />
          <Route path='/password-reset' element={<ForgotPassword />} />

          <Route
            path='/dashboard'
            element={<Navigate to={activeUser ? '/dashboard' : '/login'} />}
          />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
