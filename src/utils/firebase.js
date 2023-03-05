import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA9wSc-DeeffS5TQEf4voHKS_kDsBEQxD4",
  authDomain: "react-auth-82537.firebaseapp.com",
  projectId: "react-auth-82537",
  storageBucket: "react-auth-82537.appspot.com",
  messagingSenderId: "854757988542",
  appId: "1:854757988542:web:54376470f097554c8f26ef",
  measurementId: "G-B8F2RBP1VD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
