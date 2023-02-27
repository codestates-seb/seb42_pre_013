import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function MainTabs({ mainContentsValue, setMainContentsValue }) {
  const { id } = mainContentsValue;
  
  // /${ids} 
  const { ids } = useParams();

  console.log(mainContentsValue);
  const navigate = useNavigate();


    // ask 의 contents 받아와서 저장하기
    const [askTitle, setAskTitle] = useState("")
    // //! 답변 작성 받아오기 GET
    const fetchData = async () => {
      await axios
        .get(`http://localhost:4000/ask/${ids}`)
        .then((res) => {
          console.log(res.data.title);
          setAskTitle(res.data.title)
        })
        .catch((error) => console.log(error));
    };
  
    // 페이지 오거나, 어짜피 작성하면 answer 페이지로 오기때문에 리로딩 > get 갱신
    useEffect(() => {
      fetchData();
    }, []);

  //! 삭제 DELETE -> 해보고 안되면 useCallback((id) => {}, [answerValue])
  const deleteHandler = (e) => {

    axios
      .delete(`http://localhost:4000/ask/${ids}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        alert("Upload Error");
        console.log(err);
      });
    // `/answer/${id}`
    navigate(`/main`);
  };

  return (
    <Wrapper>
      <TopQuestions>
        <span>{askTitle}</span>

        <form onClick={(e) => e.preventDefault()}>
          <Link to="/ask">
            <button>Ask Question</button>
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
