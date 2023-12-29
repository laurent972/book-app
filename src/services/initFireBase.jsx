
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { collection, doc, setDoc } from "firebase/firestore";



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
export const db = getFirestore(app);
export const auth = getAuth(app);
