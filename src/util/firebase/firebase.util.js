

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvfxHv0hSi7gysCon27RC7gl6PVbk00Ec",
  authDomain: "clw-auth-30699.firebaseapp.com",
  projectId: "clw-auth-30699",
  storageBucket: "clw-auth-30699.appspot.com",
  messagingSenderId: "740425172278",
  appId: "1:740425172278:web:0b71866091e4a70c7c9f97",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

const db = getFirestore();

export const creatUserDocumentFromAuth = async (userAuth,additionl) => {
  if(!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionl
      });

    } catch (error) {
      console.log("errorrr creating the user", error.message);
    }
  }

  return userDocRef;
  // if user data does not exists
};

export const creactAuthUserWithEmailAndPassword = async (email,password)=>{
  if(!email || !password) return;
return await  createUserWithEmailAndPassword(auth,email,password);
}

