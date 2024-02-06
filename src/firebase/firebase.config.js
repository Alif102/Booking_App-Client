// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = { 
  apiKey: "AIzaSyC0zFIK3e06Wt2Ndhd5uhmw_yfn36WMmLw",
  authDomain: "bookingapp-291ff.firebaseapp.com",
  projectId: "bookingapp-291ff",
  storageBucket: "bookingapp-291ff.appspot.com",
  messagingSenderId: "164215743416",
  appId: "1:164215743416:web:36cbd488c03880b361e54d"

  
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;


// apiKey: "AIzaSyCZi5aLD4QAMVqvS3sy4lxRKO8e-3zkGpI",
//   authDomain: "hotel-booking-mern-c8edc.firebaseapp.com",
//   projectId: "hotel-booking-mern-c8edc",
//   storageBucket: "hotel-booking-mern-c8edc.appspot.com",
//   messagingSenderId: "921105867761",
//   appId: "1:921105867761:web:f61adee75e54782dc55a50"




// apiKey: "AIzaSyDU4XoCXaXyAl_mAbxL1K7yZit5xS4BtWA",
// authDomain: "booking-app-506c3.firebaseapp.com",
// projectId: "booking-app-506c3",
// storageBucket: "booking-app-506c3.appspot.com",
// messagingSenderId: "29147087060",
// appId: "1:29147087060:web:234593bbdb800ac1437b41"