// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYEnR-diIzSQTNoR6nG0gjFDJoj-FW0UY",
  authDomain: "personal-portfolio-bb6ea.firebaseapp.com",
  projectId: "personal-portfolio-bb6ea",
  storageBucket: "personal-portfolio-bb6ea.firebasestorage.app",
  messagingSenderId: "484138863636",
  appId: "1:484138863636:web:37e64b65c7333c786deb01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp };