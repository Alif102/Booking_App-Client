// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU4XoCXaXyAl_mAbxL1K7yZit5xS4BtWA",
  authDomain: "booking-app-506c3.firebaseapp.com",
  projectId: "booking-app-506c3",
  storageBucket: "booking-app-506c3.appspot.com",
  messagingSenderId: "29147087060",
  appId: "1:29147087060:web:234593bbdb800ac1437b41"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;