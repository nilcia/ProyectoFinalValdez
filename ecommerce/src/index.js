import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_fd8CmBV8NdJyfjN45dKXOOfUcbBw32A",
  authDomain: "coderhouse-443ad.firebaseapp.com",
  projectId: "coderhouse-443ad",
  storageBucket: "coderhouse-443ad.appspot.com",
  messagingSenderId: "269114162253",
  appId: "1:269114162253:web:67f0f7c52843b649e7f004"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
