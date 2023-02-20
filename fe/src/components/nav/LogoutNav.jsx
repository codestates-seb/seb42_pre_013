import React from "react";
import styled from "styled-components";
import stackOverflow from "../../assets/img/stackOverFlowIcon.png";
import menuBar from "../../assets/svg/bars-solid.svg";
import searchIcon from "../../assets/svg/magnifying-glass-solid.svg";
import stackExchange from "../../assets/svg/logo_stack-exchange.svg"

function LogoutNav() {
  return (
    <>
      <NavTop />
      <WrapperNav>
        <Icon>
          <img src={menuBar} alt="menuBar" />
        </Icon>
        <WrapperEtc></WrapperEtc>
        <TitleImg>
          <img src={stackOverflow} alt="stackOverflow Logo" />
        </TitleImg>
        <Title>
          <p>
            stack<b>overflow</b>
          </p>
        </Title>
        <NavTab>
          {/* <a href="https://stackoverflow.co/">About</a> */}
          <p>Products</p>
          {/* <a href="https://stackoverflow.co/teams/">ForTeams</a> */}
        </NavTab>
        <Search>
          <img src={searchIcon} alt="searchIcon"></img>
          <input type="text" placeholder="Search..."></input>
        </Search>
        <Buttons>
          <div>
          <button>User</button>
          </div>
          <button>
            <img
              src="https://cdn-icons-png.flaticon.com/512/482/482956.png"
              alt="Recent inbox messages"
            />
          </button>
          <button>
            <img
              src="https://cdn-icons-png.flaticon.com/512/8660/8660026.png"
              alt="Recent achievements"
            />
          </button>            <button>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4467/4467515.png"
              alt="Help Center and other resources"
            />
          </button>            
          <button>
            <img
              src={stackExchange}
              alt="A list of Stack Exchange sites"
            />
          </button>
        </Buttons>
      </WrapperNav>
    </>
  );
}

export default LogoutNav;

const WrapperNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: whiteSmoke;
  height: 3rem;
  box-shadow: 1px 1px 7px gray;
  width: 100%;
`;

const WrapperEtc = styled.div`
  margin-left: 3rem;
`;

const NavTop = styled.div`
  height: 4px;
  background-color: #f48225;
`;

const Icon = styled.div`
  /* position: absolute; */
  width: 15px;    border: 1px solid #85aecc;

  margin: 15px 15px;
`;

const TitleImg = styled.div`
  img {
    width: 2.6rem;
    height: 2.4rem;
    margin: 0.3rem 0 1rem 0;
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  margin-top: 0.4rem;
`;

const NavTab = styled.div`
  font-size: 0.9rem;
  display: flex;
  margin: 12px;
  a {
    margin-right: 10px;
    color: #878c90;
    list-style: none;
    text-decoration: none;

    :hover {
      font-weight: bold;
    }
  }

  p {
    margin-right: 10px;
    color: #878c90;
    list-style: none;
    text-decoration: none;

    :hover {
      font-weight: bold;
      cursor: pointer
    }
  }
`;

const Search = styled.div`
  display: relative;
  margin: 8px;
  width: 30%;
  input {
    width: 100%;
    height: 30px;
    text-indent: 2rem;
  }
  img {
    position: absolute;
    width: 15px;
    height: 15px;
    top: 20px;
    margin-left: 10px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  &>div {
    width: 40px;
    button {
      width: 24px;
      height: 24px;
      background-color: #f48225;
    }
  }
  img{
    width: 20px;
    height: 20px;
  }
  button {
    height: 47px;
    padding: 0 10px;
    border: none;
    background: transparent;
    /* width: 60px;
    height: 2.3rem;
    border-radius: 5px;
    background-color: #e1ecf5;
    color: #85aecc;
    margin: 5px;
    :last-child {
      background-color: #0a94ff;
      color: #ffffff;
      border: none;
    } */
  }
`;