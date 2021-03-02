import firebase from 'firebase';



const firebaseConfig = {
  apiKey: "AIzaSyCgRy_VjPXY1Hc8KydKsAacQvq61LrDQsg",
  authDomain: "slack-clone-challenge-84f13.firebaseapp.com",
  projectId: "slack-clone-challenge-84f13",
  storageBucket: "slack-clone-challenge-84f13.appspot.com",
  messagingSenderId: "727300625779",
  appId: "1:727300625779:web:9e9c48a1330fb33a95e106",
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 

  export default db;