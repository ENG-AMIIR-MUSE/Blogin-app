// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.VITE_FIREBASE_API_KEY)
const firebaseConfig = {
  apiKey: "AIzaSyDlNwpwfF-xPB4EMN1xnX01kT2APmui_IA",
  authDomain: "mern-blog-e6ac6.firebaseapp.com",
  projectId: "mern-blog-e6ac6",
  storageBucket: "mern-blog-e6ac6.appspot.com",
  messagingSenderId: "202005278716",
  appId: "1:202005278716:web:d2f3de24f66461b0fb0c79"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);