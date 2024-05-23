// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA916rWjvrdu6244F-iVrx88cxoJKWUvdE",
  authDomain: "upliance-3acde.firebaseapp.com",
  projectId: "upliance-3acde",
  storageBucket: "upliance-3acde.appspot.com",
  messagingSenderId: "1093785412997",
  appId: "1:1093785412997:web:c27787a03fdb9cae5150ec",
  measurementId: "G-V9M8C2ZMDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app);
export default app;