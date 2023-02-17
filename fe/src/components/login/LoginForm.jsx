import React from "react";
import styled from "styled-components";

function LoginForm() {
  return (
    <>
      <LoginFm>
        <form>
          <label>Email</label>
          <input type="email" required />
          <label>Password</label>
          <input type="password" required />
          <LoginBtn>Log in</LoginBtn>
        </form>
      </LoginFm>
    </>
  );
}

export default LoginForm;

const LoginFm = styled.div`
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #ffffff;
    width: 300px;
    height: 200px;
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
