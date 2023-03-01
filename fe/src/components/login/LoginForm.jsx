import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function LoginForm() {
  const navigate = useNavigate();

  // 쿠키 설정
  const [cookies, setCookie, removeCookie] = useCookies();

  const LoginHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.email);

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const { data } = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      // path 전역 사용
      setCookie("accessToken", data["accessToken"], { path: "/" });
      navigate("/main");
      window.location.reload()
    } catch (error) {
      alert("로그인 실패! 이메일,비밀번호를 정확히 입력해주세요.");
      console.log(error);
    }

    // const {data } = axios
    //   .post(SERVER_URL, { email, password })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     // 로그인 성공 시 localStorage에 토큰 저장
    //     // 메인 페이지로 이동
    //     setCookie('accessToken', data['accessToken'], { path: '/' })
    //     // localStorage.setItem("token", response.ACCESS_TOKEN);
    //     alert("성공적으로 로그인 했습니다.");

    //     // alert(`${res.data.username}로 로그인 했습니다! `);
    //     navigate("/main");
    //     window.location.reload();
    //   })
    //   .catch((error) => {
    //     // 실패 시 알림
    //     alert("ID 또는 비밀번호가 틀립니다.");
    //   });
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
