import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import '../../assets/styles/form.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="main-content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
