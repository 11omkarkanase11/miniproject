import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBtaXKfSBUsBAvHj0iwzVVoLAyyGwCMw44",
    authDomain: "miniprojectsem5.firebaseapp.com",
    projectId: "miniprojectsem5",
    storageBucket: "miniprojectsem5.appspot.com",
    messagingSenderId: "903992128935",
    appId: "1:903992128935:web:8495255551fb057627f282",
    measurementId: "G-P3RQMPMDWX"
  };

  const app = initializeApp(firebaseConfig);
  export const db=getFirestore(app);