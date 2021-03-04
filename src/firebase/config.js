import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDNQ980wAi6aRcJpUemrVkYt2HA8ds4E9c",
  authDomain: "clone-84f71.firebaseapp.com",
  databaseURL: "https://clone-84f71.firebaseio.com",
  projectId: "clone-84f71",
  storageBucket: "clone-84f71.appspot.com",
  messagingSenderId: "315056278744",
  appId: "1:315056278744:web:a3f51dffc1b3122ff75bad",
  measurementId: "G-8H9NVZXYTR"
};

firebase.initializeApp(firebaseConfig);

export default firebase;