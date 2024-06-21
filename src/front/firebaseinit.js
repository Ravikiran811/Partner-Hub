// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBXOOSWfwl2Gaepx1-uO36x85HfOZlqYw",
  authDomain: "business-startup-a6026.firebaseapp.com",
  projectId: "business-startup-a6026",
  storageBucket: "business-startup-a6026.appspot.com",
  messagingSenderId: "780444722145",
  appId: "1:780444722145:web:fa8173320b1bbc6e2ca8a0",
  measurementId: "G-JPKEQSG36C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);