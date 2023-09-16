// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app



