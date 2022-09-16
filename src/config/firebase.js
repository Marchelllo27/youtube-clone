import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "clone-8d293.firebaseapp.com",
  projectId: "clone-8d293",
  storageBucket: "clone-8d293.appspot.com",
  messagingSenderId: "76405917259",
  appId: "1:76405917259:web:b909617e350eaaf0ee2fce",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
