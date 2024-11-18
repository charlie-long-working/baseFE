import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const navigate = useNavigate();

  return (
    <div className="form-wrapper">
      <h1>Create New Password</h1>
      <p>
        Your new password must contain at least one letter, one special
        character and one number
      </p>

      <Form className="custom-form">
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Enter New Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="re-password">
          <Form.Label>Re-enter New Password</Form.Label>
          <Form.Control type="password" placeholder="Re-enter password" />
        </Form.Group>
      </Form>

      <span
        onClick={() => {
          navigate('/login');
        }}
        className="addon-text"
      >
        Back to login
      </span>

      <button className="submit-btn">Create Password</button>
    </div>
  );
};

export default ChangePassword;
