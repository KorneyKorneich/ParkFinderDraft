import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDBqd9PsAlNldbfmeJPz8mfg7z5O8pWQY8",
    authDomain: "parkingfinder-2d48a.firebaseapp.com",
    projectId: "parkingfinder-2d48a",
    storageBucket: "parkingfinder-2d48a.appspot.com",
    messagingSenderId: "1080472955120",
    appId: "1:1080472955120:web:1f418a54b3a694a46c7a35"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
