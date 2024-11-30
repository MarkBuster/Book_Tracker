// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr69mHCaV33IrOYQngoIzzcLXvYJIQT9A",
  authDomain: "booktracker-1ed32.firebaseapp.com",
  databaseURL: "https://booktracker-1ed32-default-rtdb.firebaseio.com",
  projectId: "booktracker-1ed32",
  storageBucket: "booktracker-1ed32.firebasestorage.app",
  messagingSenderId: "1048953274628",
  appId: "1:1048953274628:web:8848ddbd31991185255051",
  measurementId: "G-LFJP66HRD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);