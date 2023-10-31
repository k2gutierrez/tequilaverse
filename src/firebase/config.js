// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: 'AIzaSyAu3uaivU4_dcmDipBtrqr59jCSC5EQY0I',
    authDomain: 'arquimainfsys.firebaseapp.com',
    projectId: 'arquimainfsys',
    storageBucket: 'arquimainfsys.appspot.com',
    messagingSenderId: '220334849818',
    appId: '1:220334849818:web:d65e267b0a726f9f5e36a3',
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
//const analytics = getAnalytics(firebase_app);

export default firebase_app;
export const db = getFirestore(firebase_app);
export const storage = getStorage(firebase_app);