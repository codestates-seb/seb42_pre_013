import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, navigate } from "react-router-dom";

function MainTabs() {
  const questionHandler = (e) => {
    //링크 /question 넣어주기
  };

  //! 삭제 DELETE -> 해보고 안되면 useCallback((id) => {}, [answerValue])
  const deleteHandler = (e) => {
    //링크 /question 넣어주기
    // let data = JSON.stringify({
    //   //! 키 값은 api 명세서에 따라 변경
    //   id: id,
    //   content: answerValue,
    // });
    // const header = {
    //   headers: {
    //     "Content-Type": `application/json`,
    //   },
    // };
    // axios
    //   .delete("", data, header)
    //   .then((data) => {
    //     // setAnswerValue(answerValue.filter((el) => el.id !== id));
    //   })
    //   .catch((err) => {
    //     alert("Upload Error");
    //     console.log(err);
    //   });
    //   // `/answer/${id}`
    // navigate("/answer");
    // window.location.reload();
  };

  return (
    <Wrapper>
      <TopQuestions>
        <span>title 받아오기</span>

        <form onClick={(e) => e.preventDefault()}>
          <Link to="/ask">
            <button onClick={questionHandler}>Ask Question</button>
          </Link>

          <button onClick={deleteHandler}>Delete</button>
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
    /* delete button */
    :last-child {
      background-color: #2274cc;

      :hover {
        background-color: #0a2113;
      }
    }
  }
`;
