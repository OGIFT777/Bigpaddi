// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCtU7iVAUfmhMN-UD3jWvux8OVN4LYD48",
  authDomain: "bigpaddi-aa1a6.firebaseapp.com",
  projectId: "bigpaddi-aa1a6",
  storageBucket: "bigpaddi-aa1a6.appspot.com",
  messagingSenderId: "978675744052",
  appId: "1:978675744052:web:644404c01f6aebbcfe3961"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)