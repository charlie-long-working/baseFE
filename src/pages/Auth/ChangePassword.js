import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../redux/slices/authSlice';
import { selectIsLoading } from '../../redux/selectors/authSelectors';
import { useState } from 'react';
import { errorFormValidation } from '../../constants';
import { Eye, EyeSlash } from 'react-bootstrap-icons';

const ChangePassword = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();

      const formData = new FormData(form);
      dispatch(changePassword(formData));
    }

    setValidated(true);
  };

  const handleShowPassword = () => {
    setIsShowPassword((prev) => !prev);
  };

  const handleShowConfirmPassword = () => {
    setIsShowConfirmPassword((prev) => !prev);
  };

  return (
    <div className="form-wrapper">
      <h1>Create New Password</h1>
      <p>
        Your new password must contain at least one letter, one special
        character and one number
      </p>

      <Form
        noValidate
        validated={validated}
        className="custom-form"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Enter New Password</Form.Label>
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

        <Form.Group className="mb-3" controlId="re-password">
          <Form.Label>Re-enter New Password</Form.Label>
          <div style={{ position: 'relative' }}>
            <Form.Control
              type={isShowConfirmPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              name="confirmPassword"
              required
            />
            <span onClick={handleShowConfirmPassword} className="password-icon">
              {isShowConfirmPassword ? <EyeSlash /> : <Eye />}
            </span>
            <Form.Control.Feedback type="invalid">
              {errorFormValidation.password}
            </Form.Control.Feedback>
          </div>
        </Form.Group>

        <span
          onClick={() => {
            navigate('/login');
          }}
          className="addon-text"
        >
          Back to login
        </span>

        <Button type="submit" disabled={isLoading} className="submit-btn">
          Create Password
        </Button>
      </Form>
    </div>
  );
};

export default ChangePassword;
