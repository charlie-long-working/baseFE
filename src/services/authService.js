import axios from 'axios';

// eslint-disable-next-line no-undef
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const signupUserAPI = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
  return response.data;
};

export const loginUserAPI = async (credentials) => {
  const response = await axios.post('/auth/login', credentials);
  return response.data;
};

export const changePasswordAPI = async (userData) => {
  const response = await axios.post('/auth/change-password', userData);
  return response.data;
};

export const sendOTPAPI = async (userData) => {
  const response = await axios.post('/auth/send-otp', userData);
  return response.data;
};

export const confirmOTPAPI = async (otpCode) => {
  const response = await axios.post('/auth/confirm-otp', otpCode);
  return response.data;
};
