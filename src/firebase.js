// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCgW1LsAgriH-QB2MmSaXrJOohXTSkdP8E",
  authDomain: "x-e1-6a192.firebaseapp.com",
  projectId: "x-e1-6a192",
  storageBucket: "x-e1-6a192.appspot.com",
  messagingSenderId: "492909442228",
  appId: "1:492909442228:web:3cbc5aeee9a63419e553e1",
  measurementId: "G-GTG5LRLSD4"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();