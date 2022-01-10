import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDtXzRw06sA1B2i2vA7jqO3nTaWatTeFoE",
  authDomain: "netflix-clone-c2a81.firebaseapp.com",
  projectId: "netflix-clone-c2a81",
  storageBucket: "netflix-clone-c2a81.appspot.com",
  messagingSenderId: "953904460239",
  appId: "1:953904460239:web:bd76cb305fc2f1a674e2ba"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
