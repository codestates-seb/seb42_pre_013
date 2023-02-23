import React from "react";
import styled from "styled-components";
import MainNav from "../components/nav/MainNav";
import SideTabs from "../components/answer/SideTabs";
import RightSideTabs from "../components/answer/RightSideTabs";
import MainTabs from "../components/answer/MainTabs";
import Footer from "../components/footer/Footer";
import MainTabsUnder from "../components/answer/MainTabsUnder";

function Answer() {
  return (
    <>
      <MainNav />
      <Wrapper>
        <InnerWrapper>
          <SideTab>
            <SideTabs />
          </SideTab>

          <MainWrapper>
            <MainTab>
              <MainTabs />
            </MainTab>

            <MainUnderWrapper>
              <MainTabsUnder />
              <RightSideTabs />
            </MainUnderWrapper>
          </MainWrapper>
        </InnerWrapper>
        <Footer />
      </Wrapper>
    </>
  );
}

export default Answer;

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
  flex: 1;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
`;

const MainTab = styled.div`
  /* border-bottom: 1px solid gray; */
  margin-bottom: 1rem;
`;

const MainUnderWrapper = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }

  > div:first-child {
    flex: 7;
    margin-right: 1rem;
  }
  > div:last-child {
    flex: 3;
  }
`;
