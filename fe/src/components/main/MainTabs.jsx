import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Main from "../../pages/Main";
import MainPost from "./MainPost";

function MainTabs({ mainContentsValue }) {
  return (
    <Wrapper>
      <TopQuestions>
        <span>Tob Questions</span>

        <form>
          <Link to="/ask">
            <button>Ask Question</button>
          </Link>
        </form>
      </TopQuestions>
      <TopQuestionsUnder>
        <form onClick={(e) => e.preventDefault()}>
          <button>Interesting</button>
          <button>Bountied</button>
          <button>Hot</button>
          <button>Week</button>
          <button>Month</button>
        </form>
      </TopQuestionsUnder>
      <MainPosts>
        {mainContentsValue &&
          mainContentsValue.map((el) => {
            return (
              <Link
                to={`/answer/${el.id}`}
                key={el.id}
                style={{ textDecoration: "none" }}
              >
                <MainPost mainContentsValue={el} key={el.id} />
              </Link>
            );
          })}
      </MainPosts>
    </Wrapper>
  );
}

export default MainTabs;

const Wrapper = styled.div`
  padding: 1.5rem;
  border-left: 1px solid #cecece;
  height: 100%;
`;

const TopQuestions = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 1.7rem;
    font-weight: 500;
  }

  button {
    width: 6rem;
    height: 2.3rem;
    border-radius: 5px;
    border: 1px solid #85aecc;
    margin: 5px;
    cursor: pointer;
    background-color: #0a94ff;
    color: #ffffff;
    border: none;

    :hover {
      background-color: #2274cc;
    }
  }
`;

const TopQuestionsUnder = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  button {
    height: 2.3rem;
    border-radius: 5px;
    border: 1px solid #cccccc;
    cursor: pointer;
    background-color: #ffffff;
    color: black;
    border-right: none;

    :first-child {
      background-color: #e3e6e8;
    }
    :last-child {
      border-right: 1px solid #cccccc;
    }
  }
`;

const MainPosts = styled.div`
  height: 83%;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
`;
