import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { confirmOTP } from '../../redux/slices/authSlice';
import { selectIsLoading } from '../../redux/selectors/authSelectors';

const OTPVerify = () => {
  const { email } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      const nextInput = document.querySelector(
        `input[name="otp-${index + 1}"]`
      );
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleSubmit = () => {
    const otpString = otp.join('');
    console.log(otpString);

    dispatch(confirmOTP(otpString));
  };

  return (
    <div className="form-wrapper">
      <h1>OTP Verification</h1>
      <p>
        Enter OTP sent to <b>{email}</b>
      </p>

      <div className="custom-form custom-form__otp">
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={value}
            onChange={(e) => handleChange(e, index)}
            name={`otp-${index}`}
          />
        ))}
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

      <button
        disabled={isLoading}
        onClick={handleSubmit}
        className="submit-btn"
      >
        Verify OTP
      </button>
    </div>
  );
};

export default OTPVerify;
