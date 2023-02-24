import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MainNav from "../components/nav/MainNav";
import SideTabs from "../components/main/SideTabs";
import RightSideTabs from "../components/main/RightSideTabs";
import MainTabs from "../components/main/MainTabs";
import Footer from "../components/footer/Footer";

// import { useNavigate } from "react-router-dom";

function Main({mainContentsValue}) {


  return (
    <>
      <MainNav />
      <Wrapper>
        <InnerWrapper>
          <SideTab>
            <SideTabs />
          </SideTab>
          <MainTab>
            <MainTabs mainContentsValue={mainContentsValue} />
          </MainTab>
          <SideRightEtc>
            <RightSideTabs />
          </SideRightEtc>
        </InnerWrapper>
        <Footer />
      </Wrapper>
    </>
  );
}

export default Main;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  margin-top: 0.2rem;
  border-left: 1px solid gray;
`;

const InnerWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  margin-top: 0.2rem;
`;

const SideTab = styled.div`
  flex-grow: 1;
`;

const MainTab = styled.div`
  flex-grow: 6;
`;

const SideRightEtc = styled.div`
  flex-grow: 2;
`;
