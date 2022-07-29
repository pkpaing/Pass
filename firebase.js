// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDND7IGpCBv_uQilMvUsMs0xKut7b0JjJM",
  authDomain: "pass-d1e16.firebaseapp.com",
  projectId: "pass-d1e16",
  storageBucket: "pass-d1e16.appspot.com",
  messagingSenderId: "1081456442123",
  appId: "1:1081456442123:web:d7c1f1c4369bff8e70400e",
  measurementId: "G-8Q0T2SZYQ2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
