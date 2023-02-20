import React from "react";
import styled from "styled-components";
import logo_github from "../../assets/svg/logo_github.svg";
import logo_google from "../../assets/svg/logo_google.svg";
import logo_facebook from "../../assets/svg/logo_facebook.svg";

function SignUpButtons() {
  return (
    <>
      <WrapperBtn>
        <GoogleLogin>
          <img src={logo_google} alt="logo_google" />
          Log in with Google
        </GoogleLogin>
        <GitLogin>
          <img src={logo_github} alt="logo_github" />
          Log in with GitHub
        </GitLogin>
        <FacebookLogin>
          <img src={logo_facebook} alt="logo_facebook" />
          Log in with Facebook
        </FacebookLogin>
      </WrapperBtn>
    </>
  );
}
export default SignUpButtons;

const WrapperBtn = styled.div`
`

const SocialBtn = styled.button`
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  width: 300px;
  border: 1px solid #d7d9dd;
  padding: 10px;
  margin: 4px 0;
  border-radius: 5px;
  letter-spacing: normal;
  text-align: center;
  margin-top: 0.5rem;

  img {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }

  :hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

const GitLogin = styled(SocialBtn)`
  background-color: #232629;
  color: #ffffff;
  outline: none;
`;

const GoogleLogin = styled(SocialBtn)`
  background-color: #ffffff;
  outline: none;
`;

const FacebookLogin = styled(SocialBtn)`
  background-color: #385499;
  color: #ffffff;
  outline: none;
`;
