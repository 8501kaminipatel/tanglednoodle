import React from 'react';

import GoogleButton from 'react-google-button'; // Assuming you're using a Google button library

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-content">
        <img
          src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/29/9610da61-a1a4-4215-b1fa-f612242d10e61698602536819-Flat_200--1-.jpg"
          alt="Brand"
          className="brand-logo"
        />
        <h3 className="login-heading">Sign in with Google</h3>
        <GoogleButton
          type="dark"
          onClick={() => { console.log('Google button clicked') }}
          className="google-button"
        />
      </div>
    </div>
  );
};

export default LoginPage;
