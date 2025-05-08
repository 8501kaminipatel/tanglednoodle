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
    <div className="container login-page py-5">
    <div className="row justify-content-center">
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 login-content text-center p-4 shadow rounded bg-white">
  
        <img
          src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/29/9610da61-a1a4-4215-b1fa-f612242d10e61698602536819-Flat_200--1-.jpg"
          alt="Brand"
          className="img-fluid brand-logo mb-4"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
  
        <h3 className="login-heading mb-3">Sign in with Google</h3>
        <div className="d-flex justify-content-center mb-4">
          <GoogleButton onClick={handlegooglesubmit} />
        </div>
  
        <hr className="my-4" />
  
        <h3 className="login-heading mb-3">Or Login with Phone</h3>
  
        <div className="px-3">
          <input
            type="tel"
            placeholder="Enter mobile number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control mb-3"
          />
          {otpSent && (
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="form-control mb-3"
            />
          )}
          {!otpSent ? (
            <button onClick={handleSendOtp} className="btn btn-primary w-100 mb-2">Send OTP</button>
          ) : (
            <button onClick={handleVerifyOtp} className="btn btn-success w-100 mb-2">Verify OTP</button>
          )}
          <div id="recaptcha-container" />
        </div>
  
        <p className="mt-4 px-3 text-muted" style={{ fontSize: "0.95rem" }}>
          This login page allows users to securely access the application using Google OAuth 2.0 or phone number OTP. Simple, secure, and fast.
        </p>
  
      </div>
    </div>
  </div>
  
  );
};


export default Login;
