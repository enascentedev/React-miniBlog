import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEtJgq57DuAPb78SxODlmkgXZCwzYrKlo",
  authDomain: "miniblog-f959f.firebaseapp.com",
  projectId: "miniblog-f959f",
  storageBucket: "miniblog-f959f.appspot.com",
  messagingSenderId: "124043246779",
  appId: "1:124043246779:web:452189206f877143683d9e"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {app, db};