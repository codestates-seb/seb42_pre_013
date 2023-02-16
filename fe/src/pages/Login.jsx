import React from 'react'
import styled from 'styled-components'
import LoginNav from '../components/nav/LoginNav'

function Login() {
  return (
    <Wrapper>
      <LoginNav />
    </Wrapper>
  )
}

export default Login

const Wrapper = styled.div`
  background-color: #F1F2F3;
  height: 100vh;
  width: 100%;
`