// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Your web app's Firebase configuration
var firebaseConfig = {
    //databaseURL: "https://bitspecial-devtest1.firebaseio.com",//OLD
    databaseURL: "acikyolbul-default-rtdb.europe - west1.firebasedatabase.app",//new
    apiKey: "AIzaSyC-dRZ94DiR7HzyjcvhR6VLp2cBEKrOO5s",
    authDomain: "acikyolbul.firebaseapp.com",
    projectId: "acikyolbul",
    storageBucket: "acikyolbul.appspot.com",
    messagingSenderId: "542648766322",
    appId: "1:542648766322:web:25eff64e99c0e9f82157eb",
    measurementId: "G-YCDNSX26K6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);