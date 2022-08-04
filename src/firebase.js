import { initializeApp } from "firebase/app";
import { query, collection,getDocs, doc, getFirestore,getDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClsdG4iQOOQALFUnaPYJz6VGk0rFH1IeE",
  authDomain: "worldmarket-860ec.firebaseapp.com",
  projectId: "worldmarket-860ec",
  storageBucket: "worldmarket-860ec.appspot.com",
  messagingSenderId: "572684101213",
  appId: "1:572684101213:web:4482d2d84fa55a0ae94fb4"
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export const getFireStoreApp = () => {
    return app
};