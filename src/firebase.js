import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCSVfoYi9MgIsrpH5yXSTvy6HjmTIqaiY",
  authDomain: "slack-clone-8bdcb.firebaseapp.com",
  projectId: "slack-clone-8bdcb",
  storageBucket: "slack-clone-8bdcb.appspot.com",
  messagingSenderId: "627323833724",
  appId: "1:627323833724:web:6a6cea4ba69030022ea8f9",
  measurementId: "G-BF0XTFHYZD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
