import {
  signInWithGooglePopup,
  creatUserDocumentFromAuth,
} from "../../util/firebase/firebase.util";
import SingUpForm from "../../components/sing-up-form/sing-up-form.component";
import SingInForm from "../../components/sing-in-form copy/sing-in-form.component";
import './authantication.style.scss'
const Authantication = () => {
  return (
    <div className="authantication-container">
      <SingInForm />
      <SingUpForm />
    </div>
  );
};
export default Authantication;
