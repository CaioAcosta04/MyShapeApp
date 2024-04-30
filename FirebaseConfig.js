import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEPMu8bMCitqcXWMeLVUJ5cPf_SvtZJM0",
  authDomain: "myshapeapp-f9c29.firebaseapp.com",
  projectId: "myshapeapp-f9c29",
  storageBucket: "myshapeapp-f9c29.appspot.com",
  messagingSenderId: "658949936573",
  appId: "1:658949936573:web:4b26860accb5e1bb9deed4",
  measurementId: "G-RZK7HGC7BE"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_POPUP = new GoogleAuthProvider();
