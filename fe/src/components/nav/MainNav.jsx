import React from "react";
import styled from "styled-components";
import stackOverflow from "../../assets/img/stackOverFlowIcon.png";
import searchIcon from "../../assets/svg/magnifying-glass-solid.svg";

function MainNav() {
  return (
    <>
      <NavTop />
      <WrapperNav>
        <TitleImg>
          <img src={stackOverflow} alt="stackOverflow Logo" />
        </TitleImg>

        <Title>
          <p>
            stack<b>overflow</b>
          </p>
        </Title>

        <NavTab>
          <p>Products</p>
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

export default MainNav;

const WrapperNav = styled.div`
  display: flex;
  flex-direction: row;
  background-color: whiteSmoke;
  height: 3rem;
  box-shadow: 1px 1px 7px gray;
  width: 100%;
`;

const NavTop = styled.div`
  height: 4px;
  background-color: #f48225;
`;

const TitleImg = styled.div`
  img {
    width: 2.6rem;
    height: 2.4rem;
    margin: 0.3rem 0 0.1rem 0;
  }
`;

const Title = styled.div`
  font-size: 1.2rem;
  margin-top: 0.6rem;
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
      letter-spacing: -0.88px;
    }
  }

  p {
    margin-right: 10px;
    color: #878c90;
    list-style: none;
    text-decoration: none;

    :hover {
      font-weight: bold;
      cursor: pointer;
      letter-spacing: -1px;
    }
  }
`;

const Search = styled.div`
  display: relative;
  margin: 8px;
  width: 40%;
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
  justify-content: end;

  form {
    margin-left: 2rem;
  }
  button {
    width: 60px;
    height: 2.3rem;
    border-radius: 5px;
    border: 1px solid #85aecc;
    background-color: #e1ecf5;
    color: #85aecc;
    margin: 5px;
    cursor: pointer;
    :last-child {
      background-color: #0a94ff;
      color: #ffffff;
      border: none;
    }

    :hover {
    }
  }
`;
