
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,

    authDomain: "newproject-59043.firebaseapp.com",
  
    projectId: "newproject-59043",
  
    storageBucket: "newproject-59043.appspot.com",
  
    messagingSenderId: "1043510740191",
  
    appId: "1:1043510740191:web:b06ca4f3ab6e84960e156a"
  
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);