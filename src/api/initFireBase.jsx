// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyA3h32n36RgjQmYjCeIGfR2VBWOI3tWM-0",
  authDomain: "bookapp-da83f.firebaseapp.com",
  projectId: "bookapp-da83f",
  storageBucket: "bookapp-da83f.appspot.com",
  messagingSenderId: "979762487461",
  appId: "1:979762487461:web:fcc8e1e18b365d06e56d4c",
  measurementId: "G-P705D4L0WN"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


const analytics = getAnalytics(app);
