import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDEJfO-RVYanODlb-4VJKL1oO-2-S-0R04",
    authDomain: "reactwebapp-fcb6a.firebaseapp.com",
    databaseURL: "https://reactwebapp-fcb6a.firebaseio.com",
    projectId: "reactwebapp-fcb6a",
    storageBucket: "reactwebapp-fcb6a.appspot.com",
    messagingSenderId: "1020647339098",
    appId: "1:1020647339098:web:ef80abd5dc2eb934945463",
    measurementId: "G-YE4W4646SR"
  };
const fire = firebase.initializeApp(firebaseConfig);
export default fire;