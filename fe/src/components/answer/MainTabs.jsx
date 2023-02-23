import React, { useState } from "react";
import styled from "styled-components";

function MainTabs() {
  const questionHandler = (e) => {
    //링크 /question 넣어주기
    e.preventDefault();
  };

  return (
    <Wrapper>
      <TopQuestions>
        <span>Tob Questions</span>

        <form onClick={questionHandler}>
          <button>Ask Question</button>
        </form>
      </TopQuestions>
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
