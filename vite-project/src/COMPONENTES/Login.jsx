
import React, { useContext, useEffect } from 'react';
import GoogleButton from 'react-google-button';
import { toast } from "react-toastify";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, useParams } from 'react-router-dom';
import { auth, provider } from '../SERVICES/Firebase';
import { Usercontext } from '../CONTEXT/Authcontext';

const Login = () => {
  const navigate = useNavigate(); // fixed typo
  const { user, setUser } = useContext(Usercontext);


  async function handlegooglesubmit(e) {
    e.preventDefault();
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res);
      setUser(res.user);
    navigate("/")
    toast.success("Login successful ✅",{
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
      });
    } catch (error) {
      console.log(error);
      toast.error(" Login failed ❌" ,{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
        });
    }
  }



  return (


    <div className="login-page">
      <div className="login-content">
        <img
          src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/29/9610da61-a1a4-4215-b1fa-f612242d10e61698602536819-Flat_200--1-.jpg"
          alt="Brand"
          className="brand-logo"
        />
        <h3 className="login-heading">Sign in with Google</h3>
        <div style={{marginLeft:"80px"}}>
        <GoogleButton onClick={handlegooglesubmit} />
        </div>
        <p style={{marginTop:"20px",padding:"10px"}}>This login page allows users to securely access the application using their Google account via OAuth 2.0. It provides a simple and intuitive interface designed for ease of use and fast access.</p>
      </div>
    </div>
  );
};

export default Login;
