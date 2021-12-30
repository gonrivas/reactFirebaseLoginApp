import {getAuth} from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXSZeY6QSY7oJAaRgrwLtVjVgPUCEuiF0",
  authDomain: "react-prueba-8670a.firebaseapp.com",
  projectId: "react-prueba-8670a",
  storageBucket: "react-prueba-8670a.appspot.com",
  messagingSenderId: "880735578668",
  appId: "1:880735578668:web:d2ee7c656c7deaab5b3f89",
  measurementId: "G-WV7PCN4K7K"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
