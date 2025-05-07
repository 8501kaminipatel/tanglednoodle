import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChanged,
  signOut,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import { auth } from "../SERVICES/Firebase";
import { toast } from "react-toastify";

export const Usercontext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [flag, setFlag] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);

  // Toggle icon flag
  const changeicon = () => {
    setFlag(!flag);
  };

  // Monitor auth state or restore from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        localStorage.setItem("user", JSON.stringify(currentUser));
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }
    });

    return () => unsubscribe();
  }, []);

  // Sign out logic
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        localStorage.removeItem("user");
        toast.success("Logout successful ✅", { theme: "dark" });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Logout failed ❌", { theme: "dark" });
      });
  };

  // 🔢 Phone login: Step 1 - Send OTP
  const sendOTP = async (phoneNumber) => {
    try {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
          size: "invisible",
          callback: () => {},
        });
      }

      const appVerifier = window.recaptchaVerifier;
      const result = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setConfirmationResult(result);
      toast.success("OTP sent 📲", { theme: "dark" });
      return true;
    } catch (error) {
      console.error("OTP Send Error:", error);
      toast.error("Failed to send OTP ❌", { theme: "dark" });
      return false;
    }
  };

  // 🔐 Phone login: Step 2 - Verify OTP
  const verifyOTP = async (code) => {
    try {
      if (!confirmationResult) throw new Error("No confirmation result found");
      const result = await confirmationResult.confirm(code);
      setUser(result.user);
      localStorage.setItem("user", JSON.stringify(result.user));
      toast.success("Login successful ✅", { theme: "dark" });
      return true;
    } catch (error) {
      console.error("OTP Verify Error:", error);
      toast.error("Invalid OTP ❌", { theme: "dark" });
      return false;
    }
  };

  return (
    <Usercontext.Provider
      value={{
        user,
        setUser,
        handleSignOut,
        flag,
        changeicon,
        sendOTP,
        verifyOTP,
      }}
    >
      {children}
    </Usercontext.Provider>
  );
};
