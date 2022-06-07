import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATx5iRLbk3MMDWyRR6mJHVsYknX61jjCY",
  authDomain: "fir-login-5fdcf.firebaseapp.com",
  projectId: "fir-login-5fdcf",
  storageBucket: "fir-login-5fdcf.appspot.com",
  messagingSenderId: "564371950853",
  appId: "1:564371950853:web:1aee400832eb24748c7b6c",
  measurementId: "G-MHQWDSQ0Y0"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;