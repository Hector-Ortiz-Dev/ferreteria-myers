// Importa la funcion que inicializa firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
//import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
//import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Objeto de configuracion
const firebaseConfig = {
  //apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  //authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  //projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  //storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  //messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  //appId: process.env.REACT_APP_FIREBASE_APP_ID
  apiKey: "AIzaSyD71krFZFLf9qkUPie3NElKIW3ec-wH2bc",
  authDomain: "ferreteria-myers.firebaseapp.com",
  projectId: "ferreteria-myers",
  storageBucket: "ferreteria-myers.appspot.com",
  messagingSenderId: "851587631574",
  appId: "1:851587631574:web:3dabcb156ae5f19e12fc77"
};

//Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore();

export {db, auth};

//firebase.initializeApp(firebaseConfig);
//
//const db = firebase.firestore();
//const auth = firebase.auth();
//
//export {db, auth};