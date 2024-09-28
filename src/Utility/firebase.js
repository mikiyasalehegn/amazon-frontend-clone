import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGzEJ0-ur2U7OoNk2vr8cWa8jkPxNoAD8",
  authDomain: "mk--clone-4388a.firebaseapp.com",
  projectId: "mk--clone-4388a",
  storageBucket: "mk--clone-4388a.appspot.com",
  messagingSenderId: "162697575653",
  appId: "1:162697575653:web:16fa41ecf233d0c4c0680c",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
