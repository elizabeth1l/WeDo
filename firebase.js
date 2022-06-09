import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBN004Uhm__guUOHDwLOPauECOxYDOPdcw",
  authDomain: "wedo-5e019.firebaseapp.com",
  projectId: "wedo-5e019",
  storageBucket: "wedo-5e019.appspot.com",
  messagingSenderId: "562549437760",
  appId: "1:562549437760:web:65de69d19705bc16fab6a5",
  measurementId: "G-WGFX8515TB",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);
