import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyClSsgzGDZ6aELPtQ_BaLEqrfsHH1zln-g",
  authDomain: "book-santa-571e7.firebaseapp.com",
  projectId: "book-santa-571e7",
  storageBucket: "book-santa-571e7.appspot.com",
  messagingSenderId: "128700998709",
  appId: "1:128700998709:web:c7de9c0e61adfa5cd77d7c"

}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
