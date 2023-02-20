import React from "react";
import styled from "styled-components";
import MainNav from "../components/nav/MainNav";
import SideTabs from "../components/sideTab/SideTabs";

function Main() {
  return (
    <>
      <MainNav />
      <Wrapper>
        <InnerWrapper>
          <SideTab><SideTabs/></SideTab>
          <MainTab></MainTab>
          <SideRightEtc></SideRightEtc>
        </InnerWrapper>
      </Wrapper>
    </>
  );
}

export default Main;

const Wrapper = styled.div`
  background-color: #f1f2f3;
  height: 100vh;
  width: 100%;
  margin-top: 0.2rem;
`;

const InnerWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  margin-top: 0.2rem;
`;

const SideTab = styled.div`
  flex-grow: 1;
  background-color: aliceblue;
`;

const MainTab = styled.div`
  flex-grow: 6;
`;

const SideRightEtc = styled.div`
  flex-grow: 2;
  background-color: bisque;
`;
