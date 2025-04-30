// src/components/Login.jsx

import React, { useState, useEffect } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../SERVICES/Firebase";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  useEffect(() => {
    if (window.location.hostname === "localhost") {
      auth.settings.appVerificationDisabledForTesting = true;
    } else {
      setupRecaptcha();
    }
  }, []);

  const setupRecaptcha = () => {
    if (window.recaptchaVerifier) return;

    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "normal",
        callback: (response) => {
          console.log("reCAPTCHA verified");
        },
        "expired-callback": () => {
          alert("reCAPTCHA expired. Please reload and try again.");
        }
      },
      auth
    );

    window.recaptchaVerifier.render().then((widgetId) => {
      console.log("reCAPTCHA rendered with widget ID:", widgetId);
    });
  };

  const sendOtpAsync = async (phone) => {
    const formattedPhone = `+91${phone.trim()}`;

    try {
      let appVerifier;

      if (window.location.hostname === "localhost") {
        auth.settings.appVerificationDisabledForTesting = true;

        // Dummy verifier for testing mode
        appVerifier = {
          type: "recaptcha",
          verify: () => Promise.resolve("test-code")
        };
      } else {
        if (!window.recaptchaVerifier) {
          setupRecaptcha();
        }
        appVerifier = window.recaptchaVerifier;
      }

      const result = await signInWithPhoneNumber(auth, formattedPhone, appVerifier);
      setConfirmationResult(result);
      alert("OTP sent. Use the test code from Firebase Console.");
    } catch (error) {
      console.error("Failed to send OTP:", error);
      alert("Failed to send OTP: " + (error.message || "Unknown error"));
    }
  };

  const verifyOtpAsync = async (otp) => {
    if (!confirmationResult) {
      alert("Please request OTP first.");
      return;
    }

    try {
      const result = await confirmationResult.confirm(otp);
      alert("OTP verified! Welcome, " + result.user.phoneNumber);
    } catch (error) {
      console.error("OTP verification failed:", error);
      alert("OTP verification failed. Please try again.");
    }
  };

  const handleSendOtp = async () => {
    if (!phone) {
      alert("Please enter a valid phone number.");
      return;
    }
    await sendOtpAsync(phone);
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      alert("Please enter the OTP.");
      return;
    }
    await verifyOtpAsync(otp);
  };

  return (
    <div style={styles.container}>
      <img
        src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/29/9610da61-a1a4-4215-b1fa-f612242d10e61698602536819-Flat_200--1-.jpg"
        alt="Brand"
        style={{ width: "400px", marginBottom: "20px" }}
      />
      <h3>Login via Phone</h3>
      <input
        type="tel"
        placeholder="Enter mobile number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={styles.input}
      />
      <div id="recaptcha-container" style={{ margin: "15px 0" }} />
      <h6>
        By continuing, I agree to the Terms & Conditions and I am above 18 years old.
      </h6>
      <button onClick={handleSendOtp} style={styles.button}>Send OTP</button>

      {confirmationResult && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleVerifyOtp} style={styles.button}>Verify OTP</button>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "80px auto",
    background: "#fff",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },
  input: {
    width: "90%",
    padding: "10px",
    margin: "10px 0"
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#ff3e6c",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px"
  }
};

export default Login;
