
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB14jSJPqlFHf15VVyP57jsA-0-rv50Ajw",
    authDomain: "capture-13a7e.firebaseapp.com",
    databaseURL: "https://capture-13a7e.firebaseio.com",
    projectId: "capture-13a7e",
    storageBucket: "capture-13a7e.appspot.com",
    messagingSenderId: "649031299361",
    appId: "1:649031299361:web:6e3c9de510854f029b8e60",
    measurementId: "G-PPD1KD11L1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var db = firebase.firestore()
export  {db}
export {firebase}