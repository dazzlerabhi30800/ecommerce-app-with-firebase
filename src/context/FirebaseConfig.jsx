import React from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAufy69Kf7QMXnSxtff2eTwzmIpQZkeRUU",
  authDomain: "e-commerce-website-7901c.firebaseapp.com",
  projectId: "e-commerce-website-7901c",
  storageBucket: "e-commerce-website-7901c.appspot.com",
  messagingSenderId: "805595180845",
  appId: "1:805595180845:web:db6bd96802ae4693a0eda4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

export const auth = getAuth(app);
