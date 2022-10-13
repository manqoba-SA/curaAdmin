import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {initializeFirestore } from "firebase/firestore";
import "firebase/storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBLF3L1Y5Mb0mVoqPutS__PoS7ItovuG7A",
  authDomain: "cura-f90e6.firebaseapp.com",
  projectId: "cura-f90e6",
  storageBucket: "cura-f90e6.appspot.com",
  messagingSenderId: "78132743831",
  appId: "1:78132743831:web:8e3e6749c75ac3836e63d2",
  measurementId: "G-WDZNLVR18B",
};

const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);
//init services
const auth = getAuth();
export const firestore = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
// export const storage = storage();
// Firebase storage reference
const storage = getStorage(app);
export default storage;

export {
  auth,
  //db,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};
