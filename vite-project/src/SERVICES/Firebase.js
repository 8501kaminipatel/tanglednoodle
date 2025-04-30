// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfGqyefPRrmgLOYPdoMgDfizGCi5Lm8NE",
  authDomain: "myshop-admin-panel.firebaseapp.com",
  projectId: "myshop-admin-panel",
  storageBucket: "myshop-admin-panel.firebasestorage.app",
  messagingSenderId: "818915641676",
  appId: "1:818915641676:web:8c8447d61e3e1085c3e7e9",
  measurementId: "G-D381T87Q2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

