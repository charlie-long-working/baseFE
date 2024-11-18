import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { errorFormValidation } from '../../constants';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const email = form.email.value;

      navigate(`/otp-verify/${email}`);
    }

    setValidated(true);
  };

  return (
    <div className="form-wrapper">
      <h1>Forgot Password?</h1>
      <p>Enter your registerd email with Roo</p>

      <Form
        noValidate
        validated={validated}
        className="custom-form"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required />
          <Form.Control.Feedback type="invalid">
            {errorFormValidation.email}
          </Form.Control.Feedback>
        </Form.Group>

        <span
          onClick={() => {
            navigate('/login');
          }}
          className="addon-text"
        >
          Back to Login
        </span>

        <Button type="submit" className="submit-btn">
          Get OTP
        </Button>
      </Form>
    </div>
  );
};

export default ForgotPassword;
