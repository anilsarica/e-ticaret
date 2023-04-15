//// burada google firebase ile etkileşime buradan girilecek.
//firebase ile etkileşime geçildi

import { initializeApp } from "firebase/app";
//burası bizim için authentication işlemileri için(kullanıcı kaydı)
import { getAuth } from "firebase/auth" 
//firestore database erişimi için
import {getFirestore} from "firebase/firestore"
//storage erişimi için (resim kayıt yeri)
import { getStorage } from "firebase/storage"

export const firebaseConfig = {
  apiKey: "AIzaSyCVb5xTnD3G9DvaRJpb1D8zMxwCF1jzkFg",
  authDomain: "e-ticaret-class-8de42.firebaseapp.com",
  projectId: "e-ticaret-class-8de42",
  storageBucket: "e-ticaret-class-8de42.appspot.com",
  messagingSenderId: "962142490080",
  appId: "1:962142490080:web:a0744a794b7ae7194baf85"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app