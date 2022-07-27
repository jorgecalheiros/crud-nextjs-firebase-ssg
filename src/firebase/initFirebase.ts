import { initializeApp } from "firebase/app";
import "firebase/firestore"
import { collection, getDocs, getFirestore, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1KeKM-VmbDOHK-OH_F6pKN4Xug3Y9_bs",
    authDomain: "crud-nextjs-ace53.firebaseapp.com",
    projectId: "crud-nextjs-ace53",
    storageBucket: "crud-nextjs-ace53.appspot.com",
    messagingSenderId: "980649843441",
    appId: "1:980649843441:web:4511bdcc54f531f0886750"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app }

