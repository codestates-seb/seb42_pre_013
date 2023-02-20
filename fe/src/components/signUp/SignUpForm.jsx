import React from "react";
import styled from "styled-components";
import copyBtn from "../../assets/svg/copyBtn.svg";
import { Link } from "react-router-dom";

function SignUpForm() {
  return (
    <>
      <LoginFm>
        <form>
          <label>Display name</label>
          <input type="text" required />
          <label>Email</label>
          <input type="email" required />
          <label>Password</label>
          <input type="password" required />
          <p>
            Passwords must contain at least eight
            <br />
            characters, including at least 1 letter and 1<br />ß number.
          </p>
          <LoginBtn>Sign up</LoginBtn>
          <BottomExplain>
            By clicking “Sign up”, you agree to our
            <a href="https://stackoverflow.com/legal/terms-of-service/public">
              terms of <br /> service
            </a>
            ,
            <a href="https://stackoverflow.com/legal/privacy-policy">
              privacy policy
            </a>
            and
            <a href="https://stackoverflow.com/legal/cookie-policy">
              cookie policy
            </a>
          </BottomExplain>
        </form>
        <ExplainWrapper>
          <p>
            Don't have an account?{" "}
            <Link to="/" style={{ textDecoration: "none", color: "#0a95ff" }}>
              Log in
            </Link>
          </p>
          <p>
            Are you an employer? Sign up on Talent
            <img src={copyBtn} alt="cpBtn" />
          </p>
        </ExplainWrapper>
      </LoginFm>
    </>
  );
}

export default SignUpForm;

const LoginFm = styled.div`
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #ffffff;
    width: 300px;
    height: 400px;
    border-radius: 5px;
    box-shadow: 1px 1px 3px gray;
    margin-top: 1.5rem;
  }

  input {
    width: 250px;
    height: 35px;
  }

  label {
    /* align-Content: flex-start; */
    font-size: 0.9rem;
    font-weight: bold;
  }

  p {
    font-size: 12px;
    margin-top: 10px;
  }
`;

const BottomExplain = styled.p`
  margin: 3rem 17px 0px 17px;
  a {
    text-decoration: none;
    color: #0a95ff;
    margin: 3px;
  }
`;

const LoginBtn = styled.button`
  width: 250px;
  height: 41px;
  font-size: 13px;
  text-align: center;
  background-color: #0a95ff;
  padding: 10px;
  margin: 5px 0;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  margin: 15px 0px;

  :hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

const ExplainWrapper = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
  & > p {
    margin-top: 1rem;
  }

  img {
    margin-left: 5px;
  }
`;
