// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqs3-RLOwRMBbNPuihZYdaY-44eeXuxI4",
  authDomain: "blog-project-1a1b5.firebaseapp.com",
  projectId: "blog-project-1a1b5",
  storageBucket: "blog-project-1a1b5.appspot.com",
  messagingSenderId: "712417655510",
  appId: "1:712417655510:web:fc586826f77a232b42a777",
  measurementId: "G-X5XCT5S6EN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let auth = getAuth(app);
export let provider = new GoogleAuthProvider();
export let db = getFirestore(app)