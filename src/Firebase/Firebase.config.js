// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDJQRjbfz8Jp3rFw8_xRoe2bNsvZy4Kz14",
  authDomain: "car-doctor-4673d.firebaseapp.com",
  projectId: "car-doctor-4673d",
  storageBucket: "car-doctor-4673d.appspot.com",
  messagingSenderId: "589552493582",
  appId: "1:589552493582:web:f3fe3ebd2ced5357ff485f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;