import firebase from 'firebase/app'
import 'firebase/firestore'
  
const firebaseConfig = {
    apiKey: "AIzaSyBcKdlt2U7iht9l61vTXyIML_hpkcnSe48",
    authDomain: "fitness-e5cae.firebaseapp.com",
    projectId: "fitness-e5cae",
    storageBucket: "fitness-e5cae.appspot.com",
    messagingSenderId: "739950420716",
    appId: "1:739950420716:web:c03aa3acba9f2dbffebbc9"
  };
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({timestampsInSnapshots : true})
  
export default db;