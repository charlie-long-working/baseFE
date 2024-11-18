import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { errorFormValidation } from '../../constants';

const SignUp = () => {
  const navigate = useNavigate();
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
    }
    console.log(form.checkValidity());

    setValidated(true);
  };

  return (
    <div className="form-wrapper">
      <h1>Sign Up</h1>
      <p>Start your 30-day free trial.</p>

      <Form
        noValidate
        validated={validated}
        className="custom-form"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your Name" required />
          <Form.Control.Feedback type="invalid">
            {errorFormValidation.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required />
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
            navigate('/change-password');
          }}
          className="addon-text"
        >
          Change your password
        </span>

        <Button className="submit-btn" type="submit">
          Get Started
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
