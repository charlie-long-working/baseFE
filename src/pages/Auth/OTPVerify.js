import { useParams, useNavigate } from 'react-router-dom';

const OTPVerify = () => {
  const { email } = useParams();
  const navigate = useNavigate();

  return (
    <div className="form-wrapper">
      <h1>OTP Verification</h1>
      <p>
        Enter OTP sent to <b>{email}</b>
      </p>

      <div className="custom-form custom-form__otp">
        <input type="text" maxLength="1" />
        <input type="text" maxLength="1" />
        <input type="text" maxLength="1" />
        <input type="text" maxLength="1" />
        <input type="text" maxLength="1" />
        <input type="text" maxLength="1" />
      </div>

      <div style={{ marginTop: '32px' }}>
        <p>Did not receive OTP?</p>
        <p style={{ fontSize: 'smaller' }}>Resend OTP in 59s</p>
      </div>
      <span
        onClick={() => {
          navigate('/forgot-password');
        }}
        className="addon-text"
      >
        Go Back
      </span>
      <button className="submit-btn">Verify OTP</button>
    </div>
  );
};

export default OTPVerify;
