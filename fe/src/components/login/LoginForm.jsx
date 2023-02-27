import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Cookies } from "react-cookie";

// 쿠키 함수(토큰을 저장하기 위함)
const cookies = new Cookies();
// 쿠키에 값을 저장할 때
// option에는 쿠키의 만료기한이 들어간다. -1을 해주면 쿠키가 지워진다.
const setCookie = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};
// 쿠키에 있는 값을 꺼낼 때
const getCookie = (name) => {
  return cookies.get(name);
};
// 쿠키를 지울 때
const removeVookie = (name) => {
  return cookies.remove(name);
};

// 서버 URL을 할당하는 변수는
const SERVER_URL = "http://localhost:4000/api/users/login";

function LoginForm() {
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const response = await axios.post(SERVER_URL, { email, password });

    // response에서 토큰을 꺼낸다.
    const accessToken = response.data.token;

    //  setCookies 함수의 첫번째 인자는 쿠키 이름, 두번째 인자는 값.
    setCookie("is_login", `${accessToken}`);
    console.log(response);
    return response.data;
  };

  return (
    <>
      <LoginFm>
        <form onSubmit={onSubmitHandler}>
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
