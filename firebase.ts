// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "paraphrase-support-ai.firebaseapp.com",
  projectId: "paraphrase-support-ai",
  storageBucket: "paraphrase-support-ai.appspot.com",
  messagingSenderId: "1062999338936",
  appId: "1:1062999338936:web:5dc1edf17f0f2036bce94d",
  measurementId: "G-K9E055W86M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);