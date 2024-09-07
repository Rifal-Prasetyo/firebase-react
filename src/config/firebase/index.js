
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyB96AHr4mMQp2AZj1XfuCy1wwoa1_SwiD4",
    authDomain: "simple-notes-firebase-e2d4e.firebaseapp.com",
    projectId: "simple-notes-firebase-e2d4e",
    storageBucket: "simple-notes-firebase-e2d4e.appspot.com",
    messagingSenderId: "193350266688",
    appId: "1:193350266688:web:198d6a2ad83f42adb554a5",
    measurementId: "G-S8R3P39Z7G"
  };
  
  // Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebase);

export default firebase;