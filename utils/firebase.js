import firebase from 'firebase';
  const firebaseConfig = {
  //firebase information
  }

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //firebase database
  
  const db = firebaseApp.firestore();

  //firebase authentification
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider };
  export default db;