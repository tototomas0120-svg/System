import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA_vtyVacD33yApKttUbNdpS8CIPPFKGbU",
  authDomain: "media-magic-portal.firebaseapp.com",
  projectId: "media-magic-portal",
  storageBucket: "media-magic-portal.firebasestorage.app",
  messagingSenderId: "374909947014",
  appId: "1:374909947014:web:eb06dfd3b64fac52515507",
  measurementId: "G-5BB71YG5YZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// بنصدر الـ auth والـ db بشكل صحيح وصريح عشان الـ index.html يقراهم فورا
export { app, auth, db };