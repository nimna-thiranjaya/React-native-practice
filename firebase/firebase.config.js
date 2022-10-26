// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWkTsoonmlsOal9erWkBVy2-WXjTUmXC8",
  authDomain: "react-native-firebase-te-e9a22.firebaseapp.com",
  projectId: "react-native-firebase-te-e9a22",
  storageBucket: "react-native-firebase-te-e9a22.appspot.com",
  messagingSenderId: "230187017635",
  appId: "1:230187017635:web:09159b7022951a6c95a616",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
