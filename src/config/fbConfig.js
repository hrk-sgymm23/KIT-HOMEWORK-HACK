import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
// import { getFirestore } from '@firebase/firestore';
import 'firebase/compat/auth'
// import 'firebase/compat/analytics'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDAGrn1cGrbvw_ph1LzrRFm0WeMi-HRZ6U",
    authDomain: "kit-homework-hack.firebaseapp.com",
    projectId: "kit-homework-hack",
    storageBucket: "kit-homework-hack.appspot.com",
    messagingSenderId: "445868568123",
    appId: "1:445868568123:web:698160a4d9b1e894dd761e"
};

  // Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

firebase.firestore()
// new getFirestore();

export default firebase;