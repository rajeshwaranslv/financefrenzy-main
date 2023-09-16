import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDlHS_UZ5zGZATHtS1OonoCrX1m9kFnZ6Y",
    authDomain: "selvfi.firebaseapp.com",
    databaseURL: "https://selvfi-default-rtdb.firebaseio.com",
    projectId: "selvfi",
    storageBucket: "selvfi.appspot.com",
    messagingSenderId: "80947274395",
    appId: "1:80947274395:web:ffb698fb40da8908abdc3e",
    measurementId: "G-SFRCRRDZM1"
};

firebase.initializeApp(firebaseConfig);


export default firebase;