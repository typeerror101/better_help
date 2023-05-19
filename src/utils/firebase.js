import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import 'firebase/database';
import { getDatabase, ref, onValue, set } from "firebase/database";

const firebaseConfig = {

  apiKey: "AIzaSyA9wSc-DeeffS5TQEf4voHKS_kDsBEQxD4",
  authDomain: "react-auth-82537.firebaseapp.com",
  databaseURL: "https://react-auth-82537-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-auth-82537",
  storageBucket: "react-auth-82537.appspot.com",
  messagingSenderId: "854757988542",
  appId: "1:854757988542:web:54376470f097554c8f26ef",
  measurementId: "G-B8F2RBP1VD"

};



// Initialize Firebase

firebase.initializeApp(firebaseConfig);
export const auth = getAuth();

export const db = getDatabase();

// export function writeUserData() {
//   const db = getDatabase();
//   set(ref(db, 'Score_card/' ), {
//     Score: Score,
//   });
// }


// const Score1 = 10;

// function save(){
//   firebase.database().ref('/').child('Score_card').update({
//     Score: Score1,
//   });
// }

// save();

