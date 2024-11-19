import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { errorFormValidation } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/slices/authSlice';
import { selectIsLoading } from '../../redux/selectors/authSelectors';

const LogIn = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleShowPassword = () => {
    setIsShowPassword((prev) => !prev);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();

      const formData = new FormData(form);
      dispatch(loginUser(formData));
    }

    setValidated(true);
  };

  return (
    <div className="form-wrapper">
      <h1>Login</h1>
      <p>Welcome back! Please enter your details.</p>

      <Form
        noValidate
        validated={validated}
        className="custom-form"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <Form.Control.Feedback type="invalid">
            {errorFormValidation.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <div style={{ position: 'relative' }}>
            <Form.Control
              type={isShowPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              name="password"
              required
            />
            <span onClick={handleShowPassword} className="password-icon">
              {isShowPassword ? <EyeSlash /> : <Eye />}
            </span>
            <Form.Control.Feedback type="invalid">
              {errorFormValidation.password}
            </Form.Control.Feedback>
          </div>
        </Form.Group>

        <span
          onClick={() => {
            navigate('/forgot-password');
          }}
          className="addon-text"
        >
          Forgot password?
        </span>

        <Button disabled={isLoading} type="submit" className="submit-btn">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LogIn;
