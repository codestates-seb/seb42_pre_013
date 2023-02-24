import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MainNav from "../components/nav/MainNav";
import SideTabs from "../components/main/SideTabs";
import RightSideTabs from "../components/main/RightSideTabs";
import MainTabs from "../components/main/MainTabs";
import Footer from "../components/footer/Footer";
import axios from "axios"
// import { useNavigate } from "react-router-dom";

function Main() {
    // title , contents 값
    const [mainContentsValue, setMainContentsValue] = useState("");
  
    // 작성글 ID
    const contentsId = useRef(1);
  
    // navigate 받기
    // const navigate = useNavigate();
  
    //! 제목, 타이틀 받아오기 GET -> BOARD 주소
    const fetchData = async () => {
      await axios
        .get(``)
        .then((res) => {
          console.log(res);
          setMainContentsValue(res.data.data);
        })
        .catch((error) => console.log(error));
    };
  
    // 페이지 접속 시 로딩 && 게시글 작성시 <Link to> 로  > get 갱신
    useEffect(() => {
      fetchData();
    }, []);

  return (
    <>
      <MainNav />
      <Wrapper>
        <InnerWrapper>
          <SideTab>
            <SideTabs />
          </SideTab>
          <MainTab>
            <MainTabs mainContentsValue={mainContentsValue}/>
          </MainTab>
          <SideRightEtc><RightSideTabs /></SideRightEtc>
        </InnerWrapper>
        <Footer/>
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
