import React from "react"
import { LogoImage, MainContainer } from "./styled"
import logo from "../../assets/alien.png"
import SignUpForm from "./SignUpForm";


const SignUpPage = ({ setRigthButton }) => {
  return (
    <MainContainer >
      <LogoImage src={logo} alt="alien" />
      <SignUpForm setRigthButton={setRigthButton} />
    </MainContainer>
  );
}

export default SignUpPage;