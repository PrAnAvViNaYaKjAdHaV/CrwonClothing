import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import {SingUpContainer,ButtonContainer} from "./sing-in-form.style.jsx";
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";
import {
  signInWithGooglePopup,
  singInAuthUserWithEmailAndPassword,
  creatUserDocumentFromAuth,
} from "../../util/firebase/firebase.util";


const defaultFormatField = {
  email: "",
  password: "",
};

const SingInForm = () => {
  const [formField, setFormFilds] = useState(defaultFormatField);
  const { email, password } = formField;
  
  const resetFormfields = () => {
    setFormFilds(defaultFormatField);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await creatUserDocumentFromAuth(user);
  };

  const hadleChange = (event) => {
    const { name, value } = event.target;
    setFormFilds({ ...formField, [name]: value });
  };

  const EmailUser = async (event) => {
    event.preventDefault();

    try {
      const {user} = await singInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormfields();
    } catch (error) {
      console.log(error);
      if(error.code === 'auth/wrong-password' || error.code==='auth/user-not-found'){
        alert('incorrect password or email')
      }
    }
  };

  return (
    <SingUpContainer>
      <h2>Already have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={EmailUser}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={hadleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={hadleChange}
          name="password"
          value={password}
        />
        <ButtonContainer>
          <Button type="submit">sing in</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </ButtonContainer>
      </form>
    </SingUpContainer>
  );
};

export default SingInForm;
