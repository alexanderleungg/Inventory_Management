// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBquFGpBcyzoMuyM1koZtT0BIykqFHvSXA",
  authDomain: "inventory-management-ceee3.firebaseapp.com",
  projectId: "inventory-management-ceee3",
  storageBucket: "inventory-management-ceee3.appspot.com",
  messagingSenderId: "679479418608",
  appId: "1:679479418608:web:819ad4ffda0852c1902c35",
  measurementId: "G-JXR2SB9G2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}; 