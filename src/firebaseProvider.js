import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyBb8Yi30kXnIMaEUKaWhJ-hWqByU4xdGxE",
    authDomain: "companydirectory-74eb9.firebaseapp.com",
    projectId: "companydirectory-74eb9",
    storageBucket: "companydirectory-74eb9.appspot.com",
    messagingSenderId: "535708011704",
    appId: "1:535708011704:web:8a0b21a264a3a55d93384d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore()
export const firebaseAuth = firebase.auth()
export const companiesRef = firestore.collection('companies')
export const employeesRef = firestore.collection('employees')
