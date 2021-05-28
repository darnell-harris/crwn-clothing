import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBhD2BiFz-lM2Q_8rHHygOEge8ovTCHT-A",
    authDomain: "crwn-clothing-d5fef.firebaseapp.com",
    projectId: "crwn-clothing-d5fef",
    storageBucket: "crwn-clothing-d5fef.appspot.com",
    messagingSenderId: "808889165110",
    appId: "1:808889165110:web:79d9b10fe47fa674b47f97",
    measurementId: "G-CEE9SYPCHG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;