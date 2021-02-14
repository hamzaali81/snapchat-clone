import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAYBp5JVx5LIniHyiVXG-GHJF0X8wle1yY",
    authDomain: "snapchat-clone-e5718.firebaseapp.com",
    projectId: "snapchat-clone-e5718",
    storageBucket: "snapchat-clone-e5718.appspot.com",
    messagingSenderId: "1010162422837",
    appId: "1:1010162422837:web:a89396cdd472c8daabcd7c",
    measurementId: "G-7WJXCP7NF9"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();
export { db,auth,storage,provider };
