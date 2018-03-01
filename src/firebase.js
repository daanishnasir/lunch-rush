import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCZJUmq4VWZd3f12b8YVCOcyqAe170pbG0",
  authDomain: "lunch-rush-839cb.firebaseapp.com",
  databaseURL: "https://lunch-rush-839cb.firebaseio.com",
  projectId: "lunch-rush-839cb",
  storageBucket: "lunch-rush-839cb.appspot.com",
  messagingSenderId: "127991731708"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
