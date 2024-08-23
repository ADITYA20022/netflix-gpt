// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0kgtfv65RCAnUohmXFKnr0Y0mpcUSQO4",
  authDomain: "netflixgpt-2038b.firebaseapp.com",
  projectId: "netflixgpt-2038b",
  storageBucket: "netflixgpt-2038b.appspot.com",
  messagingSenderId: "231384640527",
  appId: "1:231384640527:web:7148a55fa0550aa733877a",
  measurementId: "G-HZVPC62XTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();