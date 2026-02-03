import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDV1IRcp8kpl2Yds3YmuQKMP7TUFtYviv0",
  authDomain: "college-utility-web-app.firebaseapp.com",
  projectId: "college-utility-web-app",
  storageBucket: "college-utility-web-app.firebasestorage.app",
  messagingSenderId: "911432901832",
  appId: "1:911432901832:web:85f7f72fad0bfacbe271fd",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
