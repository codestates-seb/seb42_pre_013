import React from "react";
import styled from "styled-components";
import stackOverflow from "../../assets/img/stackOverFlowIcon.png";
import menuBar from "../../assets/svg/bars-solid.svg";
import searchIcon from "../../assets/svg/magnifying-glass-solid.svg";

function LogoutNav() {
  return (
    <>
      <NavTop />
      <WrapperNav>
        <Icon>
          <div>
            <img src={menuBar} alt="menuBar" />
          </div>
        </Icon>
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
          <a>Products</a>
          {/* <a>ForTeams</a> */}
        </NavTab>
        <Search>
          <img src={searchIcon} alt="searchIcon"></img>
          <input type="text" placeholder="Search..."></input>
        </Search>
        <Button>
          <form>
            <button>Log in</button>
            <button>Sign up</button>
          </form>
        </Button>
      </WrapperNav>
    </>
  );
}

export default LogoutNav;

const WrapperNav = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: fle; */
  background-color: whiteSmoke;
  height: 3rem;
  box-shadow: 1px 1px 7px gray;
  width: 100%;
`;

const NavTop = styled.div`
  height: 4px;
  background-color: #f48225;
`;

const Icon = styled.div`
  width: 1rem;
  height: 1rem;
  margin: 1rem;
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

const Button = styled.div`
  display: flex;
  justify-content: space-around;
  form {
    padding-left: 40px;
  }
  button {
    width: 60px;
    height: 2.3rem;
    border-radius: 5px;
    border: 1px solid #85aecc;
    background-color: #e1ecf5;
    color: #85aecc;
    margin: 5px;
    :last-child {
      background-color: #0a94ff;
      color: #ffffff;
      border: none;
    }
  }
`;
