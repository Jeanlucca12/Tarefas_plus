
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQaj_IYjNF5MbwIZHpqZmrxu1NLNSQA7c",
  authDomain: "tarefasplus-1f7b6.firebaseapp.com",
  projectId: "tarefasplus-1f7b6",
  storageBucket: "tarefasplus-1f7b6.appspot.com",
  messagingSenderId: "997221023259",
  appId: "1:997221023259:web:69b026a523da28e0fc82be"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export { db };