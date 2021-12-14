import React from "react"
import { LogoImage, MainContainer } from "./styled"
import logo from "../../assets/alien.png"
import SignUpForm from "./SignUpForm";


const SignUpPage = () => {
  return (
    <MainContainer >
      <LogoImage src={logo} alt="alien" />
      <SignUpForm/>
    </MainContainer>
  );
}

export default SignUpPage;