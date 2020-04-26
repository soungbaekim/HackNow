import Firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyDnZL1lX3q_WZPHR42OJivc3wgQ0SQYL8Y",
    authDomain: "racr2-f3bf3.firebaseapp.com",
    databaseURL: "https://racr2-f3bf3.firebaseio.com",
    projectId: "racr2-f3bf3",
    storageBucket: "racr2-f3bf3.appspot.com",
    messagingSenderId: "546326766884",
    appId: "1:546326766884:web:ffef1ff25080637019ffb1",
    measurementId: "G-6D1S4EWWR5"
  };
  // Initialize Firebase
const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();