import React from 'react';
import './Header.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getNavigateUI = () => {
    switch (location.pathname) {
      case '/login':
        return (
          <div>
            <span className="d-none d-lg-inline">Do not have an account?</span>
            <button
              onClick={() => {
                navigate('/signup');
              }}
            >
              <span>Register Now</span>
            </button>
          </div>
        );
      case '/signup':
        return (
          <div>
            <span className="d-none d-lg-inline">Already have an account?</span>
            <button
              onClick={() => {
                navigate('/login');
              }}
            >
              <span>Login</span>
            </button>
          </div>
        );
      default:
        return;
    }
  };

  return (
    <header className="header">
      <img src="/logo.png" width="auto" height="100%" alt="logo" />
      {getNavigateUI()}
    </header>
  );
};

export default Header;
