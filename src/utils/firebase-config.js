import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB9jyaZfYhDAM1SmJKYzbNR6gaCqIQvcOg",
  authDomain: "react-netflix-clone-15c8b.firebaseapp.com",
  projectId: "react-netflix-clone-15c8b",
  storageBucket: "react-netflix-clone-15c8b.appspot.com",
  messagingSenderId: "654340883482",
  appId: "1:654340883482:web:f39e8df626241b1a113da3",
  measurementId: "G-DWW9JFFBDV"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
