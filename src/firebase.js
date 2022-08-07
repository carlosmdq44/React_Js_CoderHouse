import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyClsdG4iQOOQALFUnaPYJz6VGk0rFH1IeE",
  authDomain: "worldmarket-860ec.firebaseapp.com",
  projectId: "worldmarket-860ec",
  storageBucket: "worldmarket-860ec.appspot.com",
  messagingSenderId: "572684101213",
  appId: "1:572684101213:web:4482d2d84fa55a0ae94fb4"
};

const app = initializeApp(firebaseConfig);


export const getFireStoreApp = () => {
    return app
};