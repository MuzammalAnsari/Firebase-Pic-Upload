// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7I-qSC88vzciIgKrO6w0hSVITgC-uCmc",
  authDomain: "todo-firebase-22.firebaseapp.com",
  projectId: "todo-firebase-22",
  storageBucket: "todo-firebase-22.appspot.com",
  messagingSenderId: "114998186689",
  appId: "1:114998186689:web:e276ad654995be2dbc3a40",
  measurementId: "G-MMJ69NGHRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);