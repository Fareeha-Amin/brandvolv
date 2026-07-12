import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZZ0BH0Jrs3HV4ZjjsxTnoTLxxQal9HAw",
  authDomain: "brandvolv-219b1.firebaseapp.com",
  projectId: "brandvolv-219b1",
  storageBucket: "brandvolv-219b1.firebasestorage.app",
  messagingSenderId: "812753557607",
  appId: "1:812753557607:web:080e8c1d137a8fbe061cc2",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
