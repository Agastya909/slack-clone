import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCSVfoYi9MgIsrpH5yXSTvy6HjmTIqaiY",
  authDomain: "slack-clone-8bdcb.firebaseapp.com",
  projectId: "slack-clone-8bdcb",
  storageBucket: "slack-clone-8bdcb.appspot.com",
  messagingSenderId: "627323833724",
  appId: "1:627323833724:web:6a6cea4ba69030022ea8f9",
  measurementId: "G-BF0XTFHYZD",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);
// const provider = new firebase.auth.GoogleAuthProvider();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
