// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore' ;
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBY_87LcLuiGGtcjDTC6rGsxco3npK8SM",
  authDomain: "prepwise-d9cbe.firebaseapp.com",
  projectId: "prepwise-d9cbe",
  storageBucket: "prepwise-d9cbe.firebasestorage.app",
  messagingSenderId: "171534820383",
  appId: "1:171534820383:web:0e1679b6e630d4922fe12a",
  measurementId: "G-CJS2CEV62Z"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);
export const auth =getAuth(app);
export const db =getFirestore(app);
