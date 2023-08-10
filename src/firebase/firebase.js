// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAefOasS6qoa0IOjaPi0_szdsbw7p8v1yI",
  authDomain: "blogs-e50bf.firebaseapp.com",
  projectId: "blogs-e50bf",
  storageBucket: "blogs-e50bf.appspot.com",
  messagingSenderId: "876876377190",
  appId: "1:876876377190:web:8dabcb6e138f9426b111a7",
  measurementId: "G-N810LR178Q"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app)
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider();
