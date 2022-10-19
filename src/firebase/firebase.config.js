// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClaqgejLoA2IxQ76taxtgqzLbQOkLOQXg",
  authDomain: "vacay-home.firebaseapp.com",
  projectId: "vacay-home",
  storageBucket: "vacay-home.appspot.com",
  messagingSenderId: "754399807458",
  appId: "1:754399807458:web:a352c0840df9169ac71bbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app