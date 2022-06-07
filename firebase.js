import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBN004Uhm__guUOHDwLOPauECOxYDOPdcw",
  authDomain: "wedo-5e019.firebaseapp.com",
  projectId: "wedo-5e019",
  storageBucket: "wedo-5e019.appspot.com",
  messagingSenderId: "562549437760",
  appId: "1:562549437760:web:65de69d19705bc16fab6a5",
  measurementId: "G-WGFX8515TB",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const database = firebase.getDatabase(app);

const auth = firebase.auth();
export { auth };
