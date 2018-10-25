  import firebase from 'firebase'
  import 'firebase/firebase-firestore'
  import 'firebase/auth'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDAoit2HVAWnbX5ZW69REPAtLFeJN3-csU",
    authDomain: "task-manager-946ad.firebaseapp.com",
    databaseURL: "https://task-manager-946ad.firebaseio.com",
    projectId: "task-manager-946ad",
    storageBucket: "task-manager-946ad.appspot.com",
    messagingSenderId: "971774856356"
  };


  firebase.initializeApp(config);
  firebase.firestore().settings({
    timestampsInSnapshots: true
  });

  export default firebase;