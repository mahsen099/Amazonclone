// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDGjWT6Rx178WlThCZT0fp_rHUZkrDgenA",
  authDomain: "clone-32b95.firebaseapp.com",
  projectId: "clone-32b95",
  storageBucket: "clone-32b95.appspot.com",
  messagingSenderId: "883306280712",
  appId: "1:883306280712:web:8fb780d7380081e6a75ebd",
  measurementId: "G-J1HEH66P7W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
