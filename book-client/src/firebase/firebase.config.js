// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-rQThILbP1c4cqmBbW9U9_3xyozdGsPI",
  authDomain: "mern-book-inventory-bfa62.firebaseapp.com",
  projectId: "mern-book-inventory-bfa62",
  storageBucket: "mern-book-inventory-bfa62.appspot.com",
  messagingSenderId: "955400517626",
  appId: "1:955400517626:web:5ef47270a53981d0939643"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;