export const environment = {
  production: true
};


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9CNX4jEzECJ8RMiBF77VWdWYSn7TQzo4",
  authDomain: "badminmatcher.firebaseapp.com",
  databaseURL: "https://badminmatcher-default-rtdb.firebaseio.com",
  projectId: "badminmatcher",
  storageBucket: "badminmatcher.appspot.com",
  messagingSenderId: "809832349240",
  appId: "1:809832349240:web:94dd8eb8b9c563e2e0b0cd",
  measurementId: "G-0T36394ZDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
