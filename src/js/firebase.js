import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCEoHGO8_NfsZfaIqW6WagKRVEokE6ejEA",
  authDomain: "taiwanspots.firebaseapp.com",
  databaseURL: "https://taiwanspots.firebaseio.com",
  projectId: "taiwanspots",
  storageBucket: "taiwanspots.appspot.com",
  messagingSenderId: "242230843228"
};

firebase.initializeApp(config);

const firebaseAuth = firebase.auth();
const firebaseDB = firebase.database();
const firebaseOrigInfo = firebaseDB.ref('origInfo');

const firebaseRegister = firebaseAuth.createUserWithEmailAndPassword;
const firebaseSignIn = firebaseAuth.signInWithEmailAndPassword;

export {
  firebase,
  firebaseAuth,
  firebaseOrigInfo
}