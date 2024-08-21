import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_NATIVE_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_NATIVE_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_NATIVE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_NATIVE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_NATIVE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_NATIVE_APP_FIREBASE_APP_ID,
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = initializeFirestore(FIREBASE_APP, {
    experimentalForceLongPolling: true,
});
export const FIREBASE = firebase;
