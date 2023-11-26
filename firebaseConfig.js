import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDq4aGkU3xxODHfj2ILn_0-z83qXn7HXlM",
  authDomain: "lab3-771ee.firebaseapp.com",
  projectId: "lab3-771ee",
  storageBucket: "lab3-771ee.appspot.com",
  messagingSenderId: "206020830236",
  appId: "1:206020830236:web:d11a1d7bf25e4b3a102bd9",
  measurementId: "G-KQTMQKQ84B"
    
  };
  const appConfig = initializeApp(firebaseConfig);
  export default appConfig