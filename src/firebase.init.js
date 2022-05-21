// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey:process.env.REACT_APP_API_KEY,
//     authDomain:process.env.REACT_APP_AUTH_DOMAIN ,
//     projectId:process.env.REACT_APP_PROJECT_ID ,
//     storageBucket:process.env.REACT_APP_STORAGE_BUCKET ,
//     messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId:process.env.REACT_APP_APP_ID ,
// };
const firebaseConfig = {
    apiKey: "AIzaSyBOhhgjoVRc-qx70uTXywbL4lu-FHJH8No",
    authDomain: "doctors-portal-3ad92.firebaseapp.com",
    projectId: "doctors-portal-3ad92",
    storageBucket: "doctors-portal-3ad92.appspot.com",
    messagingSenderId: "267001250704",
    appId: "1:267001250704:web:a4385841e3c320135be915"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;