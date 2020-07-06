import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyC3fVD9Wqr5R2_pkD0tYDMis6DLaZ_arzU",
    authDomain: "crown-db-2b0fb.firebaseapp.com",
    databaseURL: "https://crown-db-2b0fb.firebaseio.com",
    projectId: "crown-db-2b0fb",
    storageBucket: "crown-db-2b0fb.appspot.com",
    messagingSenderId: "91500081999",
    appId: "1:91500081999:web:e29dac4ef5033a54280b3a",
    measurementId: "G-1V9B523WZB"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase