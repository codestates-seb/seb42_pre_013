import React from "react";
import styled from "styled-components";
import earth from "../../assets/img/icons8-globe-96.png";
import info from "../../assets/img/icons8-info-popup-90.png";
import star from "../../assets/img/icons8-army-star-50.png";
import folder from "../../assets/img/icons8-folder-48.png";

function SideTabs() {
  return (
    <Wrapper>
      <HomeWrapper>
        <Home>Home</Home>
      </HomeWrapper>
      <PublicWrapper>
        <div>PUBLIC</div>

        <QuestionWrapper>
          <div>
            <img src={earth} alt="earth" />
            Questions
          </div>
          <RightColor />
        </QuestionWrapper>

        <p>Tags</p>
        <p>Users</p>
        <p>Companies</p>
      </PublicWrapper>
      <CollecTivesWrapper>
        <div>
          COLLECTIVES
          <img src={info} alt="info" />
        </div>
        <p>
          <img src={star} alt="star" />
          Explore Collectives
        </p>
      </CollecTivesWrapper>
      <TeamsWrapper>
        <div>
          TEAMS
          <img src={info} alt="info" />
        </div>
        <p>
          <img src={folder} alt="folder" />
          Create free Team
        </p>
      </TeamsWrapper>
    </Wrapper>
  );
}

export default SideTabs;

const Wrapper = styled.div`
  margin-left: 3rem;
  height: 100vh;
  /* border-right: 1px solid #f1f2f3; */
`;

const HomeWrapper = styled.div`
  /* background-color: #f1f2f3; */
  margin-top: 2rem;
  font-size: 13px;
  /* font-weight: 800; */
  height: 2rem;
  display: flex;
`;

const Home = styled.div`
  flex: 1;
  padding-left: 10px;
  padding-top: 7px;
`;
const RightColor = styled.div`
  width: 4px;
  background-color: #f48225;
`;

const QuestionWrapper = styled.div`
  background-color: #f1f2f3;
  font-size: 12px;
  font-weight: 700;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  padding-left: 5px;

  div {
    top: 10px;
    padding-top: 4px;
  }
`;

const PublicWrapper = styled.div`
  margin-top: 0.8rem;
  font-size: 11px;
  margin-left: 10px;

  > div:first-child {
    color: #838b92;
  }
  p {
    position: relative;
    margin-top: 0.7rem;
    margin-bottom: 1rem;
    left: 20px;
  }

  img {
    position: relative;
    width: 1rem;
    height: 1rem;
    color: #838b92;
    top: 4px;
    right: 2px;
  }
`;

const CollecTivesWrapper = styled.div`
  margin-top: 1rem;
  font-size: 11px;
  margin-left: 10px;

  div:first-child {
    color: #838b92;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    img {
      top: 0.2rem;
    }
  }
  p {
    position: relative;
    margin-top: 0.2rem;
    margin-bottom: 1rem;
    left: 2px;
  }

  img {
    position: relative;
    width: 1rem;
    height: 1rem;
    color: #838b92;
    top: 4px;
    right: 2px;
  }
`;

const TeamsWrapper = styled.div`
  margin-top: 1rem;
  font-size: 11px;
  margin-left: 10px;

  div:first-child {
    color: #838b92;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    img {
      top: 0.2rem;
    }
  }
  p {
    position: relative;
    margin-top: 0.2rem;
    margin-bottom: 1rem;
    left: 2px;
  }

  img {
    position: relative;
    width: 1rem;
    height: 1rem;
    color: #838b92;
    top: 4px;
    right: 2px;
  }
`;
