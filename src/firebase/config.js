// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6iNiqX6tO_tBuvEGrQ-zzGi8a_RQenns",
  authDomain: "cursos-react-ecf2c.firebaseapp.com",
  projectId: "cursos-react-ecf2c",
  storageBucket: "cursos-react-ecf2c.appspot.com",
  messagingSenderId: "108223904001",
  appId: "1:108223904001:web:fe103897c9e100d9a98300"
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);

export const FireBaseAuth = getAuth (FireBaseApp);
 
export const FireBaseDB = getFirestore(FireBaseApp);
