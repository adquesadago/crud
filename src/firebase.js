import firebase from 'firebase/app'
require ('firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyDHQPvJeDPPNZzU3Sf0v4HfDKXtsw_LaaI",
    authDomain: "crud-7bd0c.firebaseapp.com",
    projectId: "crud-7bd0c",
    storageBucket: "crud-7bd0c.appspot.com",
    messagingSenderId: "606451773764",
    appId: "1:606451773764:web:16461ed95618ef71f66711"
  }

  export const firebaseApp=firebase.initializeApp(firebaseConfig)

