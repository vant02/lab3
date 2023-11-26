import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDq4aGkU3xxODHfj2ILn_0-z83qXn7HXlM",
  authDomain: "lab3-771ee.firebaseapp.com",
  projectId: "lab3-771ee",
  storageBucket: "lab3-771ee.appspot.com",
  messagingSenderId: "206020830236",
  appId: "1:206020830236:web:d11a1d7bf25e4b3a102bd9",
  measurementId: "G-KQTMQKQ84B"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };