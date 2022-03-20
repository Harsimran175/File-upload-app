import firebase from 'firebase';

const firebaseConfig = {
 apiKey: "AIzaSyD5rZLJry1_iWhTuw3NuB2gRImlXzuvOYc",
  authDomain: "wily-app-49d46.firebaseapp.com",
  databaseURL: "https://wily-app-49d46.firebaseio.com",
  projectId: "wily-app-49d46",
  storageBucket: "wily-app-49d46.appspot.com",
  messagingSenderId: "557115271704",
  appId: "1:557115271704:web:8beae3e269e8ba75bc316d"
  };

 
 if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig); 
  }
  export default firebase.firestore();