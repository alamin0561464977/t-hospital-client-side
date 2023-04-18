// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDckj5SM3Sgq_c0nOSYuEUpLkunLPkdN-Q",
    authDomain: "t-hospital.firebaseapp.com",
    projectId: "t-hospital",
    storageBucket: "t-hospital.appspot.com",
    messagingSenderId: "67855400861",
    appId: "1:67855400861:web:11fb509b93c2153cfa7974"
};

// Initialize Firebase

const auth = getAuth(initializeApp(firebaseConfig));
export default auth;