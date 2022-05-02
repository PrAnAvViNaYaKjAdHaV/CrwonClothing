
import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import './sing-up-form.style.scss';
import Button from "../button/button.component";
import {
  creactAuthUserWithEmailAndPassword,
  creatUserDocumentFromAuth,
} from "../../util/firebase/firebase.util";
const defaultFormatField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SingUpForm = () => {
  const [formField, setFormFilds] = useState(defaultFormatField);
  const { displayName, email, password, confirmPassword } = formField;
  console.log(formField);
  const resetFormfields = () =>{
    setFormFilds(defaultFormatField);
  }
  const hadleChange = (event) => {
    const { name, value } = event.target;
    setFormFilds({ ...formField, [name]: value });
  };
  const EmailUser = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      const { user } = await creactAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormfields();
      await creatUserDocumentFromAuth(user, { displayName });
  
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("This email in already in use");
      } else {
        console.log("user creaction encountered an error ", error);
      }
    }
  };
  return (
    <div className="sign-up-container">
    <h2>Dont have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={EmailUser}>
        <FormInput
          label="display Name"
          type="Input"
          required
          onChange={hadleChange}
          name="displayName"
          value={displayName}
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={hadleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">sing up</Button>
      </form>
    </div>
  );
};

export default SingUpForm;
