import React from 'react'
import{signInWithGooglePopup,creatUserDocumentFromAuth} from '../../util/firebase/firebase.util'
export default function singIn() {
  const logGoogleUser = async () =>{
    const {user} = await signInWithGooglePopup();
   const userDocRef = await creatUserDocumentFromAuth(user);
  }
  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>
        Sign in with google Popup
      </button>
    </div>
  )
}
                                                                                                                                                                                                                                                                                      