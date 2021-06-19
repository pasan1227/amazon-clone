import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBUU6Em1jy1cbGNUxg_z9jvr5ePmP-E2sM",
    authDomain: "clone-98547.firebaseapp.com",
    projectId: "clone-98547",
    storageBucket: "clone-98547.appspot.com",
    messagingSenderId: "275103312983",
    appId: "1:275103312983:web:a16432d0af01185a548712",
    measurementId: "G-TYWLH52L1N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth };