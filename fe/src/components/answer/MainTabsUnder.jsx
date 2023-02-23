import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import top from "../../assets/img/icons8-sort-up-50.png";
import down from "../../assets/img/icons8-sort-down-50.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MainTabsUnder() {
  //? answer 작성 값
  const [answerValue, setAnswerValue] = useState("");
  //? answer 작성 값 id > 1부터 시작
  const answerId = useRef(1);

  const navigate = useNavigate();

  // answer 작성 값 answerValue 저장
  const handleAnswerValue = (e) => {
    setAnswerValue(e.target.value);

    console.log(answerValue);
  };

  //! 답변 작성 받아오기
  const fetchData = async () => {
    await axios
      .get(``)
      .then((res) => {
        console.log(res);
        setAnswerValue(res.data.data);
      })
      .catch((error) => console.log(error));
  };

  // 페이지 오거나, 어짜피 작성하면 answer 페이지로 오기때문에 리로딩 > get 갱신
  useEffect(() => {
    fetchData();
  }, []);

  //! answer 작성한 것 서버에 전송
  const submitAnswerHandler = (e) => {
    if (!answerValue) {
      e.preventDefault();
      alert("empty value.. Write your answer!");
    } else {
      let data = JSON.stringify({
        //! 키 값은 api 명세서에 따라 변경
        id: answerId.current,
        content: answerValue,
      });
      const header = {
        headers: {
          "Content-Type": `application/json`,
        },
      };

      axios
        .post("", data, header)
        .then((data) => {
          setAnswerValue(answerValue.concat(data));
          answerId.current += 1;
        })
        .catch((err) => {
          alert("Upload Error");
          console.log(err);
        });

      navigate("/answer");
      window.location.reload();
    }
  };

  return (
    <Wrapper>
      <SideTopDownBtn>
        <form onSubmit={(e) => e.preventDefault()}>
          <button>
            <img src={top} alt="top" />
          </button>
          <p>0</p>
          <button>
            <img src={down} alt="top" />
          </button>
        </form>
      </SideTopDownBtn>
      <WriteWrapper>
        {/* 작성글 받아오는 컴포넌트 */}
        {/* page/Answer 에서 get 받아서 state 파라미터 전달 || 현 페이지에서 id 값 get 받아서 state 뿌리기  */}
        <p>작성글 받아오기</p>

        {/* 코멘트 리스트 컴포넌트*/}
        <AnswerList>
          <p>Comment</p>
          <div>
            <AnswerValue>
              <p>answer 값을 받아올 칸</p>
              <div>
                <p>받아올 comment 내용</p>
                <form
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <button>Edit</button>
                  <button>Delete</button>
                </form>
              </div>
              {/* {answerValue.map(() => {
          })} */}
            </AnswerValue>
          </div>
        </AnswerList>
        {/* 답변 작성 컴포넌트 */}
        <YourAnswer>
          <p>Your Answer</p>
          <form onSubmit={submitAnswerHandler}>
            <textarea onChange={handleAnswerValue}></textarea>
            <button type="submit">Post Your Answer</button>
          </form>
        </YourAnswer>
      </WriteWrapper>
    </Wrapper>
  );
}

export default MainTabsUnder;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  margin-left: 1rem;
`;

const SideTopDownBtn = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 2rem;
  flex: 1;

  img {
    width: 15px;
    height: 15px;
  }

  button {
    border: none;
  }

  p {
    margin-left: 8px;
  }
`;

const WriteWrapper = styled.div`
  flex: 9;

  input {
    width: 100%;
    height: 400px;
  }
`;

const AnswerList = styled.div``;

const AnswerValue = styled.div``;

// 답변 파트
const YourAnswer = styled.div`
  /* display: flex;
  flex-direction: column; */
  textarea {
    display: block;
    width: 500px;
    height: 300px;
    resize: none;
  }

  button {
    width: 8rem;
    height: 2.3rem;
    border-radius: 5px;
    border: 1px solid #85aecc;
    margin-top: 2rem;
    margin-bottom: 2rem;
    cursor: pointer;
    background-color: #0a94ff;
    color: #ffffff;
    border: none;

    :hover {
      background-color: #2274cc;
    }
  }
`;
