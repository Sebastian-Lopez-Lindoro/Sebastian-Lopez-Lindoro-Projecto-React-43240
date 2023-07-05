import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC88IIcx9nTgq8bkk4kmaAvVRZh74v548c",
  authDomain: "ranmastore-comision-43420.firebaseapp.com",
  projectId: "ranmastore-comision-43420",
  storageBucket: "ranmastore-comision-43420.appspot.com",
  messagingSenderId: "553571158028",
  appId: "1:553571158028:web:14e4efc4a3610fd9d48629",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
