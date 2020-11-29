import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyCpgDQ1VQTTlevJsObhfPoUSBytO1-uLQU",
    authDomain: "portfolio-8d216.firebaseapp.com",
    databaseURL: "https://portfolio-8d216.firebaseio.com",
    projectId: "portfolio-8d216",
    storageBucket: "portfolio-8d216.appspot.com",
    messagingSenderId: "589599433111",
    appId: "1:589599433111:web:ca7c2ec78ab5310a6a24d2",
    measurementId: "G-04F90HXEX2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db; 
export {firebaseApp};