import React from "react";
import styled from "styled-components";
import LoginNav from "../components/nav/LoginNav";
import LoginButtons from "../components/login/LoginButtons";
import LoginForm from "../components/login/LoginForm";
import copyBtn from "../assets/svg/copyBtn.svg";
import stackOverFlowIcon from "../assets/img/stackOverFlowIcon.png";

function Login() {
  return (
    <>
      <LoginNav />
      <Wrapper>
        <LoginWrapper>
          <img src={stackOverFlowIcon} alt="stackOverFlowIcon" />
          <LoginButtons />
          <LoginForm />
        </LoginWrapper>

        {/* Sign up , Route Link Signup page 예정 */}
        <ExplainWrapper>
          <p>
            Don't have an account? <>Sign up</>
          </p>
          <p>
            Are you an employer? Sign up on Talent
            <img src={copyBtn} alt="cpBtn" />
          </p>
        </ExplainWrapper>
      </Wrapper>
    </>
  );
}

export default Login;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f2f3;
  height: 100vh;
  width: 100%;
  margin-top: 0.2rem;
`;

const LoginWrapper = styled.div`
  margin-top: 7rem;
  & > img {
    width: 70px;
    height: 70px;
    margin-left: 7.3rem;
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
`;
