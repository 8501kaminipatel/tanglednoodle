import React, { useContext, useState } from 'react';
import GoogleButton from 'react-google-button';
import { toast } from 'react-toastify';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../SERVICES/Firebase';
import { Usercontext } from '../CONTEXT/Authcontext';

const Login = () => {
  const navigate = useNavigate();
  const { setUser, sendOTP, verifyOTP } = useContext(Usercontext);

  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  // Google login
  const handlegooglesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithPopup(auth, provider);
      setUser(res.user);
      navigate('/');
      toast.success('Login successful ✅', { theme: 'dark' });
    } catch (error) {
      console.error(error);
      toast.error('Login failed ❌', { theme: 'dark' });
    }
  };

  // Handle phone number OTP request
  const handleSendOtp = async () => {
    if (!phone || phone.length < 10) {
      toast.warn('Please enter a valid phone number 📱');
      return;
    }
    const fullPhone = phone.startsWith('+') ? phone : `+91${phone}`;
    const success = await sendOTP(fullPhone);
    if (success) setOtpSent(true);
  };

  // Handle OTP verify
  const handleVerifyOtp = async () => {
    if (!otp || otp.length !== 6) {
      toast.warn('Please enter a valid 6-digit OTP');
      return;
    }
    const success = await verifyOTP(otp);
    if (success) navigate('/');
  };

  return (
    <div className="login-page">
      <div className="login-content">
        <img
          src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/29/9610da61-a1a4-4215-b1fa-f612242d10e61698602536819-Flat_200--1-.jpg"
          alt="Brand"
          className="brand-logo"
        />

        <h3 className="login-heading">Sign in with Google</h3>
        <div style={{ marginLeft: '80px' }}>
          <GoogleButton onClick={handlegooglesubmit} />
        </div>

        <hr style={{ margin: '30px 0' }} />

        <h3 className="login-heading">Or Login with Phone</h3>
        <div style={{ padding: '10px' }}>
          <input
            type="tel"
            placeholder="Enter mobile number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ padding: '10px', width: '80%', marginBottom: '10px' }}
          />
          <br />
          {otpSent && (
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              style={{ padding: '10px', width: '80%', marginBottom: '10px' }}
            />
          )}
          {!otpSent ? (
            <button onClick={handleSendOtp} style={btnStyle}>Send OTP</button>
          ) : (
            <button onClick={handleVerifyOtp} style={btnStyle}>Verify OTP</button>
          )}
          <div id="recaptcha-container"></div>
        </div>

        <p style={{ marginTop: '20px', padding: '10px' }}>
          This login page allows users to securely access the application using Google OAuth 2.0 or phone number OTP. Simple, secure, and fast.
        </p>
      </div>
    </div>
  );
};

const btnStyle = {
  padding: '10px 20px',
  backgroundColor: '#ff3f6c',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  marginTop: '10px',
};

export default Login;
