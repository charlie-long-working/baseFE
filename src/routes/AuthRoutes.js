import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import ChangePassword from '../pages/Auth/ChangePassword';
import LogIn from '../pages/Auth/LogIn';
import SignUp from '../pages/Auth/SignUp';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import OTPVerify from '../pages/Auth/OTPVerify';

const AuthRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/otp-verify/:email" element={<OTPVerify />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Layout>
  );
};

export default AuthRoutes;
