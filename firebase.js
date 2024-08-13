// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMhef0W43Ql1ObT9uT7W9aIlOrXoUG_mA",
  authDomain: "inventory-management-67dfa.firebaseapp.com",
  projectId: "inventory-management-67dfa",
  storageBucket: "inventory-management-67dfa.appspot.com",
  messagingSenderId: "750407104742",
  appId: "1:750407104742:web:ee71e856a8344f2ea1e327",
  measurementId: "G-B047W2WKR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}