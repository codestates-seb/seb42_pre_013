import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 서버 URL을 할당하는 변수
const SERVER_URL = "http://localhost:4000/users/login";

function LoginForm() {
  const navigate = useNavigate();

  const LoginHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    axios
      .post(SERVER_URL, { email, password })
      .then((response) => response.json())
      .then((response) => {
        // 로그인 성공 시 localStorage에 토큰 저장
        // 메인 페이지로 이동
        localStorage.setItem("loginToken", response.ACCESS_TOKEN);
        alert("성공적으로 로그인 했습니다.");
        navigate("/main");
      })
      .catch((error) => {
        // 실패 시 알림
        alert("ID 또는 비밀번호가 틀립니다.");
      });
  };

  return (
    <>
      <LoginFm>
        <form onSubmit={LoginHandler}>
          <label>Email</label>
          <input type="email" name="email" required />
          <label>Password</label>
          <input type="password" name="password" required />
          <LoginBtn type="submit" value="Log in" />
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

const LoginBtn = styled.input`
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
