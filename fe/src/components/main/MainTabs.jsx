import React, { useState } from "react";
import styled from "styled-components";
import Main from "../../pages/Main";
import MainPost from "./MainPost";

function MainTabs() {
  const [post, setPost] = useState([
    {
      id: "1",
      title: "Proper way to load environment variable in runtime javascript?",
      keyword: "js",
      user: "Kim",
    },
    {
      id: "2",
      title: "Proper way to load environment variable in runtime javascript?",
      keyword: "js",
      user: "Kim",
    },
    {
      id: "3",
      title: "Proper way to load environment variable in runtime javascript?",
      keyword: "js",
      user: "Kim",
    },
    {
      id: "4",
      title: "Proper way to load environment variable in runtime javascript?",
      keyword: "js",
      user: "Kim",
    },
    {
      id: "5",
      title: "Proper way to load environment variable in runtime javascript?",
      keyword: "js",
      user: "Kim",
    },
    {
      id: "6",
      title: "Proper way to load environment variable in runtime javascript?",
      keyword: "js",
      user: "Kim",
    },
    {
      id: "7",
      title: "Proper way to load environment variable in runtime javascript?",
      keyword: "js",
      user: "Kim",
    },
    {
      id: "8",
      title: "Proper way to load environment variable in runtime javascript?",
      keyword: "js",
      user: "Kim",
    },
    {
      id: "9",
      title: "Proper way to load environment variable in runtime javascript?",
      keyword: "js",
      user: "Kim",
    },
    {
      id: "10",
      title: "Proper way to load environment variable in runtime javascript?",
      keyword: "js",
      user: "Kim",
    },
    {
      id: "11",
      title: "Proper way to load environment variable in runtime javascript?",
      keyword: "js",
      user: "Kim",
    },
    {
      id: "12",
      title: "Proper way to load environment variable in runtime javascript?",
      keyword: "js",
      user: "Kim",
    },
  ]);

  const handleBtnTop = (e) => {
    e.preventDefault();
  };

  const handleBtnUnder = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <TopQuestions>
        <span>Tob Questions</span>

        <form onClick={handleBtnTop}>
          <button>Ask Question</button>
        </form>
      </TopQuestions>
      <TopQuestionsUnder>
        <form onClick={handleBtnUnder}>
          <button>Interesting</button>
          <button>Bountied</button>
          <button>Hot</button>
          <button>Week</button>
          <button>Month</button>
        </form>
      </TopQuestionsUnder>
      <MainPosts>
        {post.map((el) => {
          return <MainPost post={el} key={el.id} />;
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
