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
        <RightColor />
      </HomeWrapper>
      <PublicWrapper>
        <div>PUBLIC</div>
        <div>
          <img src={earth} alt="earth" />
          Questions
        </div>
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
`;

const HomeWrapper = styled.div`
  background-color: #f1f2f3;
  margin-top: 2rem;
  font-size: 13px;
  font-weight: 800;
  height: 2rem;
`;

const Home = styled.div`
  flex: 6;
  padding-left: 10px;
  padding-top: 7px;
`;
const RightColor = styled.div`
  flex: 1;
  background-color: #f48225;
`;

const PublicWrapper = styled.div`
  margin-top: 1rem;
  font-size: 13px;
  margin-left: 10px;

  div:first-child {
    color: #838b92;
  }
  p {
    position: relative;
    margin-top: 1rem;
    margin-bottom: 1rem;
    left: 20px;
  }

  img {
    position: relative;
    width: 1.2rem;
    height: 1.2rem;
    color: #838b92;
    top: 4px;
    right: 2px;
  }
`;

const CollecTivesWrapper = styled.div`
  margin-top: 1rem;
  font-size: 13px;
  margin-left: 10px;

  div:first-child {
    color: #838b92;
    img {
      position: relative;
      left: 3.7rem;
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
    width: 1.2rem;
    height: 1.2rem;
    color: #838b92;
    top: 4px;
    right: 2px;
  }
`;

const TeamsWrapper = styled.div`
  margin-top: 1rem;
  font-size: 13px;
  margin-left: 10px;

  div:first-child {
    color: #838b92;
    img {
      position: relative;
      left: 6.4rem;
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
    width: 1.2rem;
    height: 1.2rem;
    color: #838b92;
    top: 4px;
    right: 2px;
  }
`;
