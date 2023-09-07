// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import { getFirestore } from 'firebase/firestore';

import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlHc-AJJDjJqetOkNw9QViXXeGxAs8ykw",
  authDomain: "frontendstore-b6335.firebaseapp.com",
  projectId: "frontendstore-b6335",
  storageBucket: "frontendstore-b6335.appspot.com",
  messagingSenderId: "636668311259",
  appId: "1:636668311259:web:9ceb4807a605543d5dbefe"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);
//export default db;

firebase.initializeApp(firebaseConfig);
export default firebase;
