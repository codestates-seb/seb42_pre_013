import React from "react";
import styled from "styled-components";
import SignUpForm from "../components/signUp/SignUpForm";
import LoginNav from "../components/nav/LoginNav";
import SignUpButtons from "../components/signUp/SignUpButtons";
import SignUpLeftExplain from "../components/signUp/SignUpLeftExplain";


function SignUp({setCookie}) {
  return (
    <>
      <LoginNav />

      <Wrapper>
        <SignUpLeftExplain />

        <WrapperRight>
          <SignUpButtons />
          <SignUpForm setCookie={setCookie}/>
        </WrapperRight>

      </Wrapper>
    </>
  );
}

export default SignUp;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f1f2f3;
  height: 100vh;
  width: 100%;
  margin-top: 0.2rem;
`;

const WrapperRight = styled.div`
  display: flex;
  flex-direction: column;
`;

