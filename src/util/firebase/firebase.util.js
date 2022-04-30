import { async } from '@firebase/util';
import {initializeApp} from 'firebase/app'
import{getAuth,
signInWithCredential,
signInWithPopup,
GoogleAuthProvider,
} from 'firebase/auth'
import{
    getFirestore,
    doc,
    getDoc,
    setDoc
}from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBvfxHv0hSi7gysCon27RC7gl6PVbk00Ec",
    authDomain: "clw-auth-30699.firebaseapp.com",
    projectId: "clw-auth-30699",
    storageBucket: "clw-auth-30699.appspot.com",
    messagingSenderId: "740425172278",
    appId: "1:740425172278:web:0b71866091e4a70c7c9f97"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider =  new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt:"select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

  const db = getFirestore();

 export const creatUserDocumentFromAuth = async(userAuth)=>{
    const userDocRef = doc(db,'users',userAuth.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    
    if(!userSnapshot.exists()){
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
            });
        }catch(error){
            console.log('errorrr creating the user',error.message);
        }
    }

    return userDocRef;
    // if user data does not exists
 
  }