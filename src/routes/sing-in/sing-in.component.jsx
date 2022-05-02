import{
signInWithGooglePopup,
creatUserDocumentFromAuth
} from '../../util/firebase/firebase.util'
import SingUpForm from '../../components/sing-up-form/sing-up-form.component';
const SingIn = ()=> { 
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
      <SingUpForm/>
    </div>
  )
}
export default SingIn