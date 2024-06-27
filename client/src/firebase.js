// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtG1xqg7fFRWo2HRmMsb3RZ6tG2UU0Ycg",
  authDomain: "bharat-blog-6e64b.firebaseapp.com",
  projectId: "bharat-blog-6e64b",
  storageBucket: "bharat-blog-6e64b.appspot.com",
  messagingSenderId: "649054853363",
  appId: "1:649054853363:web:ac34ceaf4351577f357f86",
  measurementId: "G-WVRMB6TWF9"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
